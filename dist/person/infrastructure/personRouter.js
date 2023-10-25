"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.personRoutes = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
exports.personRoutes = express_1.default.Router();
exports.personRoutes.post('/register', dependencies_1.registerPersonController.run.bind(dependencies_1.registerPersonController));
exports.personRoutes.put('/asignar_address/:id', dependencies_1.updatePersonAddressController.run.bind(dependencies_1.updatePersonAddressController));
exports.personRoutes.get('/', dependencies_1.getAllPersonController.listAllPersons.bind(dependencies_1.getAllPersonController));
exports.personRoutes.put('/validate/:id_user', dependencies_1.ValidatePersonController.run.bind(dependencies_1.ValidatePersonController));
