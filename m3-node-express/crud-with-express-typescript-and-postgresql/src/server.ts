import initDb, { pool } from './config/db.js';
import config  from './config/index.js';
import express, { NextFunction, Request, Response } from 'express'
import logger from './middleware/logger.js';
import { userRoutes } from './modules/user/user.routes.js';
import { todoRoutes } from './modules/todo/todo.routes.js';
import { authRouters } from './modules/auth/auth.routes.js';


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
app.use('/todos', todoRoutes)

//! auth routes
app.use('/auth', authRouters)


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
