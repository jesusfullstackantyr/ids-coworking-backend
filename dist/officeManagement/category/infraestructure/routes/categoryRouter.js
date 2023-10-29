"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("../dependencies");
exports.categoryRoutes = express_1.default.Router();
exports.categoryRoutes.post("/create", dependencies_1.createCategoryController.create.bind(dependencies_1.createCategoryController));
exports.categoryRoutes.put("/delete/:id", dependencies_1.deleteCategoryController.delete.bind(dependencies_1.deleteCategoryController));
