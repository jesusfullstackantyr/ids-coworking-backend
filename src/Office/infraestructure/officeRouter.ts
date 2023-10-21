import express from 'express';
import { createOfficeController } from './dependencies';

const officeRouter = express.Router();

// Ruta para crear una nueva oficina
officeRouter.post('/create', (req, res) => {
    createOfficeController.handle(req, res);
});

// officeRouter.get('/', ...);
// officeRouter.put('/:id', ...);
// officeRouter.delete('/:id', ...);

export { officeRouter };
