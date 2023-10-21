"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.officeRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
const officeRouter = express_1.default.Router();
exports.officeRouter = officeRouter;
// Ruta para crear una nueva oficina
officeRouter.post('/create', (req, res) => {
    dependencies_1.createOfficeController.handle(req, res);
});
