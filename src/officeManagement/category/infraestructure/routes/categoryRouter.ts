import express from "express";

import {
    createCategoryController,
    deleteCategoryController,
    getCategoryController,
    updateCategoryController
} from "../dependencies";

export const categoryRoutes = express.Router();

<<<<<<< HEAD
categoryRoutes.post("/", createCategoryController.create.bind(createCategoryController));
categoryRoutes.put("/delete/:id", deleteCategoryController.delete.bind(deleteCategoryController));
=======
categoryRoutes.post("/create", createCategoryController.create.bind(createCategoryController));
categoryRoutes.delete("/:id", deleteCategoryController.delete.bind(deleteCategoryController));
>>>>>>> 2caa0d82c9ddea9a180f71afe5ac88e953eea7cf

categoryRoutes.get("/:id", getCategoryController.get.bind(getCategoryController))

categoryRoutes.put("/:id", updateCategoryController.update.bind(updateCategoryController));

