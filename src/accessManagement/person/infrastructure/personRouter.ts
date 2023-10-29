import express from 'express';

import {
    
    registerPersonController,
    updatePersonController,
    
} from "./dependencies";

export const personRoutes = express.Router();

personRoutes.post('/register', registerPersonController.run.bind(registerPersonController));
personRoutes.put('/update/:id', updatePersonController.run.bind(updatePersonController));