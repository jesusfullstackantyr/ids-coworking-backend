import express from 'express';
import { getOfficeController } from './dependencies';

export const officeRoutes = express.Router();

//Esto es un ejemploooooo
//publicRoutes.post("/create", createPublicController.run.bind(createPublicController))

officeRoutes.get("/:id", getOfficeController.get.bind(getOfficeController))

