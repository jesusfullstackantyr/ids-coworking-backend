import express from "express";

import { 
    createCategoryController, 
    deleteCategoryController, 
    getCategoryController,
    updateCategoryController   } from "../dependencies";

export const categoryRoutes = express.Router();

categoryRoutes.post("/create", createCategoryController.create.bind(createCategoryController));
categoryRoutes.delete("/:id", deleteCategoryController.delete.bind(deleteCategoryController));

categoryRoutes.get("/:id", getCategoryController.get.bind(getCategoryController))

categoryRoutes.put("/update/:id", updateCategoryController.update.bind(updateCategoryController));

