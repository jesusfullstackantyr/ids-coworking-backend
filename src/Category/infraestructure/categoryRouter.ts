import express from "express";
import { createCategoryController, deleteCategoryController  } from "./dependencies";

export const categoryRoutes = express.Router();

categoryRoutes.post("/create", createCategoryController.create.bind(createCategoryController));

categoryRoutes.put("/delete/:id", deleteCategoryController.delete.bind(deleteCategoryController))
