import express from "express";
import { 
    createCategoryController, 
    deleteCategoryController, 
    getCategoryController  } from "../dependencies";

export const categoryRoutes = express.Router();

categoryRoutes.post("/create", createCategoryController.create.bind(createCategoryController));

categoryRoutes.put("/delete/:id", deleteCategoryController.delete.bind(deleteCategoryController));

categoryRoutes.get("/:id", getCategoryController.get.bind(getCategoryController))

