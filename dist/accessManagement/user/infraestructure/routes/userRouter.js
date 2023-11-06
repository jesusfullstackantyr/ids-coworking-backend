"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("../dependencies");
exports.userRouter = express_1.default.Router();
exports.userRouter.post('/', dependencies_1.userCreateController.run.bind(dependencies_1.userCreateController));
exports.userRouter.put('/:id', dependencies_1.userUpdateController.run.bind(dependencies_1.userUpdateController));
exports.userRouter.delete('/:id', dependencies_1.userDeleteController.deleteUser.bind(dependencies_1.userDeleteController));
exports.userRouter.get('/:id', dependencies_1.userGetController.getUserById.bind(dependencies_1.userGetController));
exports.userRouter.get('/getUser/Client/:id/:idRole', dependencies_1.getUserClientController.run.bind(dependencies_1.getUserClientController));
exports.userRouter.put('/password/:id', dependencies_1.updatePasswordController.run.bind(dependencies_1.updatePasswordController));
