import express from "express";
import { createCategoryController } from "./dependencies";

export const categoryRoutes = express.Router();

categoryRoutes.post(
    "/create", 
    createCategoryController.create.bind(createCategoryController));