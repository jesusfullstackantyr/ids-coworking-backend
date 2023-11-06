import express from 'express';
import { getUserClientController } from '../dependencies';


export const userRouter = express.Router();

userRouter.get('/getUser/client/:id/:idRole', getUserClientController.run.bind(getUserClientController));
