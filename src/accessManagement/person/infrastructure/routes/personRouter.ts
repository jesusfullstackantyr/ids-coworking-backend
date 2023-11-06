import express from 'express';

import {
    ValidatePersonController,
    registerPersonController,
    updatePersonController,
    
} from "../dependencies";

export const personRoutes = express.Router();

personRoutes.post('/', registerPersonController.run.bind(registerPersonController));
personRoutes.put('/:id', updatePersonController.run.bind(updatePersonController));
personRoutes.put('/validate/:id_user', ValidatePersonController.run.bind(ValidatePersonController));