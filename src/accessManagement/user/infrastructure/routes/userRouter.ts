import express from 'express';
import { addUserController, updatePasswordController, } from '../dependencies';


export const userRouter = express.Router();

userRouter.post('/register', addUserController.run.bind(addUserController));
userRouter.put('/update/:id', updatePasswordController.run.bind(updatePasswordController));