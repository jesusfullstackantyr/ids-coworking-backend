import express from "express";
import { createCategoryController, deleteCategoryController, updateCategoryController } from "../dependencies";

export const categoryRoutes = express.Router();

categoryRoutes.post("/create", createCategoryController.create.bind(createCategoryController));

categoryRoutes.put("/update/:id", updateCategoryController.update.bind(updateCategoryController));

categoryRoutes.put("/delete/:id", deleteCategoryController.delete.bind(deleteCategoryController));
