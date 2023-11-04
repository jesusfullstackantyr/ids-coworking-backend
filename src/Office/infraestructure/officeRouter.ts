import express from 'express';
import { getOfficeController,updateStatusController } from './dependencies';
import { createOfficeController } from './dependencies';

const officeRouter = express.Router();

//Esto es un ejemploooooo
//publicRoutes.post("/create", createPublicController.run.bind(createPublicController))

officeRouter.get("/:id", getOfficeController.get.bind(getOfficeController))

// Ruta para crear una nueva oficina
officeRouter.post('/create', (req, res) => {createOfficeController.handle(req, res);});


officeRouter.put("/updateStatus", (req, res) => { updateStatusController.handle(req, res);});

export { officeRouter };