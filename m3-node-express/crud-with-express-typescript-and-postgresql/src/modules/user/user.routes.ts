import express from 'express';
import { userController } from './user.controller';
import logger from '../../middleware/logger';
import auth from '../../middleware/auth';

const router = express.Router();

//! router -> controller -> service

//* localhost:5000/users/create
//? app.use('/users', userRoutes)
router.post("/create", userController.createUser);

//* Get All Users
router.get('/', logger, auth("admin"), userController.getUser);

//* Get User by Id
router.get('/:id', userController.getUserById)

//* Update User
router.put('/update/:id', userController.updateUser)

//* Delete User
router.delete('/delete/:id', userController.deleteUser)

export const userRoutes = router;