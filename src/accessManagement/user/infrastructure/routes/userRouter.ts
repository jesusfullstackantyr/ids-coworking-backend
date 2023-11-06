import express from 'express';
import { addUserController, updatePasswordController, } from '../dependencies';


export const userRouter = express.Router();

userRouter.post('/', addUserController.run.bind(addUserController));
userRouter.put('/password/:id', updatePasswordController.run.bind(updatePasswordController));