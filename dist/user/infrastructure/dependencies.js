"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUserController = void 0;
const mariadbUserRepository_1 = require("./mariadbUserRepository");
const mariadbUserRepository = new mariadbUserRepository_1.MariadbUserRepository();
const addUserController_1 = require("./controllers/addUserController");
const addUserUseCase_1 = require("../application/addUserUseCase"); // Cambiado a AddUserUseCase
const addUserUseCase = new addUserUseCase_1.AddUserUseCase(mariadbUserRepository); // Cambiado registerPersonRepository a mariadbUserRepository
const addUserController = new addUserController_1.AddUserController(addUserUseCase); // Cambiado RegisterPersonController a Controller
exports.addUserController = addUserController;
