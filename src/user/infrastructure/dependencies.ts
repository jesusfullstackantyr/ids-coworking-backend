import { MariadbUserRepository } from "./mariadbUserRepository";
const mariadbUserRepository = new MariadbUserRepository();

import { AddUserController } from './controllers/addUserController';
import { AddUserUseCase } from "../application/addUserUseCase"; // Cambiado a AddUserUseCase

const addUserUseCase = new AddUserUseCase(mariadbUserRepository); // Cambiado registerPersonRepository a mariadbUserRepository
const addUserController = new AddUserController(addUserUseCase); // Cambiado RegisterPersonController a Controller

export {
    addUserController,
};
