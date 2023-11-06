"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserClientController = void 0;
const mariadbUserRepository_1 = require("./repositories/mariadbUserRepository");
const mariadbUserRepository = new mariadbUserRepository_1.MariadbUserRepository();
const getUserClientController_1 = require("./controllers/getUserClientController");
const getUserClientUseCase_1 = require("../application/getUserClientUseCase");
const getUserClientUseCase = new getUserClientUseCase_1.GetUserClientUseCase(mariadbUserRepository);
const getUserClientController = new getUserClientController_1.GetUserClientController(getUserClientUseCase);
exports.getUserClientController = getUserClientController;