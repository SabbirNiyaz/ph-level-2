import initDb from './config/db.js';
import express, { Request, Response } from 'express'
import { userRoutes } from './modules/user/user.route.js';

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Initialize Database
initDb();

app.get('/', (req: Request, res: Response) => {
    res.send("This is a Express.js Project")
})

//! users RESTful API
app.use('/user', userRoutes)

// //! todos RESTful API
// app.use('/todo')

// //! auth RESTful API
// app.use('/auth')

//! Not Found Route Handler
app.use((req: Request, res: Response) => {
    res.status(404).json({
        success: false,
        message: 'Route not found.',
        path: req.path
    })
});

export default app;