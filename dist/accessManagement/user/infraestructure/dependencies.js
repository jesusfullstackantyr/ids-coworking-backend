"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePasswordController = exports.getUserClientController = exports.userGetController = exports.userDeleteController = exports.userUpdateController = exports.userCreateController = void 0;
const userMariaDBAdapter_1 = require("./adapters/userMariaDBAdapter");
const userCreateUseCase_1 = require("../application/userCreateUseCase");
const userCreateController_1 = require("./controllers/userCreateController");
const userUpdateUseCase_1 = require("../application/userUpdateUseCase");
const userUpdateController_1 = require("./controllers/userUpdateController");
const userDeleteUseCase_1 = require("../application/userDeleteUseCase");
const userDeleteController_1 = require("./controllers/userDeleteController");
const userGetUseCase_1 = require("../application/userGetUseCase"); // Importa el caso de uso para obtener usuario por ID
const userGetController_1 = require("./controllers/userGetController"); // Importa el controlador para obtener usuario por ID
const getUserClientController_1 = require("./controllers/getUserClientController");
const getUserClientUseCase_1 = require("../application/getUserClientUseCase");
const updatePasswordController_1 = require("./controllers/updatePasswordController");
const updatePasswordUseCase_1 = require("../application/updatePasswordUseCase");
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
const getUserClientUseCase = new getUserClientUseCase_1.GetUserClientUseCase(mariDBUserAdapter);
exports.getUserClientController = new getUserClientController_1.GetUserClientController(getUserClientUseCase);
const updatePasswordUseCase = new updatePasswordUseCase_1.UpdatePasswordUseCase(mariDBUserAdapter);
exports.updatePasswordController = new updatePasswordController_1.UpdatePasswordController(updatePasswordUseCase);
