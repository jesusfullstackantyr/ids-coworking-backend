"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentsRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("../dependencies");
exports.paymentsRouter = express_1.default.Router();
exports.paymentsRouter.post("/", dependencies_1.paymentsCreateController.createPayments.bind(dependencies_1.paymentsCreateController));
exports.paymentsRouter.get("/", dependencies_1.paymentsGetAllController.getAllPayments.bind(dependencies_1.paymentsGetAllController));
exports.paymentsRouter.put("/", dependencies_1.paymentsUpdateController.updatePayments.bind(dependencies_1.paymentsUpdateController));
exports.paymentsRouter.delete("/:id", dependencies_1.paymentsDeleteController.deletePayment.bind(dependencies_1.paymentsDeleteController));
