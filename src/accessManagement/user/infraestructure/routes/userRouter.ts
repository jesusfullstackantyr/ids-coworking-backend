import express, { Router } from 'express';
import { userCreateController, userDeleteController, userGetController, userUpdateController, getUserClientController,updatePasswordController } from '../dependencies';

export const userRouter: Router = express.Router();

userRouter.post('/', userCreateController.run.bind(userCreateController));
userRouter.put('/:id', userUpdateController.run.bind(userUpdateController));
userRouter.delete('/:id', userDeleteController.deleteUser.bind(userDeleteController));
userRouter.get('/:id', userGetController.getUserById.bind(userGetController));
userRouter.get('/getUser/Client/:id/:idRole', getUserClientController.run.bind(getUserClientController));
userRouter.put('/password/:id', updatePasswordController.run.bind(updatePasswordController));