import express from 'express';
import { todoController } from './todo.controller';

const router = express.Router();

//! router -> controller -> service

//* localhost:5000/users/create
//? app.use('/users', userRoutes)
router.post("/create", todoController.createTodo);

//* Get All Users
router.get('/', todoController.getTodo);

//* Get User by Id
router.get('/:id', todoController.getTodoById)

//* Update User
router.put('/update/:id', todoController.updateTodo)

//* Delete User
router.delete('/delete/:id', todoController.deleteTodo)

export const todoRoutes = router;