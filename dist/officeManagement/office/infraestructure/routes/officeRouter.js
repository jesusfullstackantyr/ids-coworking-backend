"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.officeRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("../dependencies");
const dependencies_2 = require("../dependencies");
const officeRouter = express_1.default.Router();
exports.officeRouter = officeRouter;
//Esto es un ejemploooooo
//publicRoutes.post("/create", createPublicController.run.bind(createPublicController))
officeRouter.get("/:id", dependencies_1.getOfficeController.get.bind(dependencies_1.getOfficeController));
// Ruta para crear una nueva oficina
officeRouter.post('/create', (req, res) => { dependencies_2.createOfficeController.handle(req, res); });
officeRouter.put('/update', (req, res) => { dependencies_1.updateOfficeController.handle(req, res); });
officeRouter.put("/updateStatus", (req, res) => { dependencies_1.updateStatusController.handle(req, res); });
