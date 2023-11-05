import express, { Router } from 'express';
import { userCreateController, userDeleteController, userGetController, userUpdateController } from '../dependencies';

export const userRouter: Router = express.Router();

userRouter.post('/register', userCreateController.run.bind(userCreateController));
userRouter.put('/:id', userUpdateController.run.bind(userUpdateController));
userRouter.delete('/:id', userDeleteController.deleteUser.bind(userDeleteController));
userRouter.get('/:id', userGetController.getUserById.bind(userGetController));