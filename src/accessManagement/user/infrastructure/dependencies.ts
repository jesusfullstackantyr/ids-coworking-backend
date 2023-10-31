import { MariadbUserRepository } from "./mariadbUserRepository";
const mariadbUserRepository = new MariadbUserRepository();

import { AddUserController } from './controllers/addUserController';
import { AddUserUseCase } from "../application/addUserUseCase";

const addUserUseCase = new AddUserUseCase(mariadbUserRepository);
const addUserController = new AddUserController(addUserUseCase);

import { UpdatePasswordController } from "./controllers/updatePasswordController";
import { UpdatePasswordUseCase } from "../application/updatePasswordUseCase";

const updatePasswordUseCase = new UpdatePasswordUseCase(mariadbUserRepository);
const updatePasswordController = new UpdatePasswordController(updatePasswordUseCase);


export {
    addUserController,
    updatePasswordController,
};