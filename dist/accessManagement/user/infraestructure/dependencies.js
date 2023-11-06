"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userGetController = exports.userDeleteController = exports.userUpdateController = exports.userCreateController = void 0;
const userMariaDBAdapter_1 = require("./adapters/userMariaDBAdapter");
const userCreateUseCase_1 = require("../application/userCreateUseCase");
const userCreateController_1 = require("./controllers/userCreateController");
const userUpdateUseCase_1 = require("../application/userUpdateUseCase");
const userUpdateController_1 = require("./controllers/userUpdateController");
const userDeleteUseCase_1 = require("../application/userDeleteUseCase");
const userDeleteController_1 = require("./controllers/userDeleteController");
const userGetUseCase_1 = require("../application/userGetUseCase"); // Importa el caso de uso para obtener usuario por ID
const userGetController_1 = require("./controllers/userGetController"); // Importa el controlador para obtener usuario por ID
const mariDBUserAdapter = new userMariaDBAdapter_1.UserMariaDBAdapterRepository();
const createUserUseCase = new userCreateUseCase_1.UserCreateUseCase(mariDBUserAdapter);
exports.userCreateController = new userCreateController_1.UserCreateController(createUserUseCase);
const userUpdateUseCase = new userUpdateUseCase_1.UserUpdateUseCase(mariDBUserAdapter);
exports.userUpdateController = new userUpdateController_1.UserUpdateController(userUpdateUseCase);
const userDeleteUseCase = new userDeleteUseCase_1.UserDeleteUseCase(mariDBUserAdapter);
exports.userDeleteController = new userDeleteController_1.UserDeleteController(userDeleteUseCase);
// Instancia el caso de uso para obtener usuario por ID
const userGetUseCase = new userGetUseCase_1.GetUserByIdUseCase(mariDBUserAdapter);
// Crea el controlador para obtener usuario por ID
exports.userGetController = new userGetController_1.UserGetController(userGetUseCase);
