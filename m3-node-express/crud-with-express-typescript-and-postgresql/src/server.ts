import initDb, { pool } from './config/db.js';
import config  from './config/index.js';
import express, { NextFunction, Request, Response } from 'express'
import logger from './middleware/logger.js';
import { userRoutes } from './modules/user/user.routes.js';


const app = express()
const port = config.port;

//? Middleware to parse JSON bodies
app.use(express.json())
//? Middleware to parse URL-encoded bodies
// app.use(express.urlencoded({ extended: true }))

//? Initialize Database
initDb();


app.get('/', logger, (req: Request, res: Response) => {
    res.send('Hello Express!')
})

//! users CRUD Operations
app.use('/users', userRoutes)


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
