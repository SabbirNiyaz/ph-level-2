import express, { NextFunction, Request, Response } from 'express'
import { Pool } from 'pg';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../.env') });

const app = express()
const port = 5000

//? Middleware to parse JSON bodies
app.use(express.json())
//? Middleware to parse URL-encoded bodies
// app.use(express.urlencoded({ extended: true }))

//? PostgreSQL Pool setup
const pool = new Pool({
    connectionString: `${process.env.CONNECTION_STR}`
})

const initDb = async () => {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(150) NOT NULL UNIQUE,
        age INT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
        )
        `)
    await pool.query(`
        CREATE TABLE IF NOT EXISTS todos (
        id SERIAL PRIMARY KEY,
        user_id INT REFERENCES users(id) ON DELETE CASCADE,
        phone VARCHAR(15),
        address TEXT,
        completed BOOLEAN DEFAULT FALSE,
        due_date DATE,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
        )
        `)
}

initDb();

//? logger middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}\n`);
    next();
}


app.get('/', logger, (req: Request, res: Response) => {
    res.send('Hello Express!')
})

//! users CRUD Operations
//todo: Create User 
app.post('/users/create', async (req: Request, res: Response) => {
    // console.log(req.body);
    const { name, email, age } = req.body;

    try {
        const result = await pool.query(
            `INSERT INTO users (name, email, age) 
            VALUES ($1, $2, $3) RETURNING *`,
            [name, email, age]
        )
        // console.log(result.rows[0]);

        res.status(201).json({
            message: 'Data Inserted',
            data: result.rows[0]
        })

    } catch (err: any) {
        console.error('Error creating user:', err);
        return res.status(500).json({
            success: false,
            message: 'Error creating user.',
            error: err.message
        })
    }
})

//todo: Get All Users
app.get('/users', logger, async (req: Request, res: Response) => {
    try {
        const result = await pool.query(`SELECT * FROM users`);
        res.status(200).json({
            success: true,
            data: result.rows
        })

    } catch (err: any) {
        return res.status(500).json({
            success: false,
            message: 'Error fetching users.',
            error: err.message
        })
    }
});

//todo: Get Users by ID
app.get('/users/:id', async (req: Request, res: Response) => {
    try {
        const result = await pool.query(`SELECT * FROM users WHERE id = $1`,
            [req.params.id]);
        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: 'User not found.'
            })
        } else {
            res.status(200).json({
                success: true,
                data: result.rows
            })
        }
        // console.log(result.rows);

    } catch (err: any) {
        return res.status(500).json({
            success: false,
            message: 'Error fetching users.',
            error: err.message
        })
    }
});

//todo: Update User by ID
app.put('/users/update/:id', async (req: Request, res: Response) => {
    const { name, email, age } = req.body;
    try {
        const result = await pool.query(`
            UPDATE users 
            SET name=$1, email=$2, age=$3 
            WHERE id=$4 RETURNING *`,
            [name, email, age, req.params.id]);

        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: 'User not found.'
            })
        } else {
            res.status(201).json({
                success: true,
                data: result.rows
            })
        }
        // console.log(result.rows);

    } catch (err: any) {
        return res.status(500).json({
            success: false,
            message: 'Error updating users.',
            error: err.message
        })
    }
});

//todo: Delete User by ID
app.delete('/users/delete/:id', async (req: Request, res: Response) => {
    try {
        const result = await pool.query(`DELETE FROM users WHERE id = $1`,
            [req.params.id]);
        if (result.rowCount === 0) {
            res.status(404).json({
                success: false,
                message: 'User not found.'
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'User deleted successfully.',
                data: null
            })
        }

    } catch (err: any) {
        return res.status(500).json({
            success: false,
            message: 'Error deleting users.',
            error: err.message
        })
    }
});

//! todos CRUD Operations
//todo: Create Todo
app.post('/todos/create', async (req: Request, res: Response) => {
    // console.log(req.body);
    const { user_id, phone, address, completed, due_date } = req.body;

    try {
        const result = await pool.query(
            `INSERT INTO todos (user_id, phone, address, completed, due_date) 
            VALUES ($1, $2, $3, $4, $5) RETURNING *`,
            [user_id, phone, address, completed, due_date]
        )

        res.status(201).json({
            message: 'Data Inserted',
            data: result.rows[0]
        })

    } catch (err: any) {
        console.error('Error creating todo:', err);
        return res.status(500).json({
            success: false,
            message: 'Error creating todo.',
            error: err.message
        })
    }
})

//todo: Not Found Route Handler
app.use((req: Request, res: Response) => {
    res.status(404).json({
        success: false,
        message: 'Route not found.',
        path: req.path
    })
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
