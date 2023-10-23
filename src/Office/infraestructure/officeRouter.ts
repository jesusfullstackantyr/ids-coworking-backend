import express from 'express';
import { updateStatusController } from './dependencies';

export const officeRoutes = express.Router();

officeRoutes.put("/updateStatus", (req, res) => {
    updateStatusController.handle(req, res);
});
