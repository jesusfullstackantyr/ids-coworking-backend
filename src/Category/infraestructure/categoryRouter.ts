import express from 'express';
import { deleteCategoryController } from './dependencies';

export const categoryRoutes = express.Router();


categoryRoutes.put("/delete/:id", deleteCategoryController.delete.bind(deleteCategoryController))