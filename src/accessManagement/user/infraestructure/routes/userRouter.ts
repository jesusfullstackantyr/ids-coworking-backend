import express from 'express';
import { getUserClientController } from '../dependencies';


export const userRouter = express.Router();

userRouter.get('/getUser/Client/:id/:idRole', getUserClientController.run.bind(getUserClientController));
