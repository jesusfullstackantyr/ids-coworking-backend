import express from 'express';

import {
    
    registerPersonController,
    updatePersonController,
    
} from "../dependencies";

export const personRoutes = express.Router();

personRoutes.post('/', registerPersonController.run.bind(registerPersonController));
personRoutes.put('/:id', updatePersonController.run.bind(updatePersonController));