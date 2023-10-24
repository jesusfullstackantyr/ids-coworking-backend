import express from 'express';

import {
    updatePersonAddressController,
    getAllPersonController,
    
} from "./dependencies";

export const personRoutes = express.Router();
personRoutes.put('/asignar_address/:id',updatePersonAddressController.run.bind(updatePersonAddressController))
personRoutes.get('/', getAllPersonController.listAllPersons.bind(getAllPersonController))