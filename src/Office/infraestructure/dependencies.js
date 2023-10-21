"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOfficeController = exports.createOfficeUseCase = exports.mariaDBRepository = void 0;
const mariaDBRepository_1 = require("./mariaDBRepository");
const createOfficeUseCase_1 = require("../application/createOfficeUseCase");
const createOfficeController_1 = require("./controller/createOfficeController");
exports.mariaDBRepository = new mariaDBRepository_1.MariaDBRepository();
exports.createOfficeUseCase = new createOfficeUseCase_1.CreateOfficeUseCase(exports.mariaDBRepository);
exports.createOfficeController = new createOfficeController_1.CreateOfficeController(exports.createOfficeUseCase);
