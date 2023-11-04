import express from 'express';
import { addUserController } from './dependencies';


export const userRouter = express.Router(); // Cambiado a userRouter

userRouter.post('/register', addUserController.run.bind(addUserController)); // Cambiado a addUserController
