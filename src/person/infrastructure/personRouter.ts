import express from 'express';

import {
    registerPersonController,
    updatePersonAddressController,
    getAllPersonController,
    ValidatePersonController
} from "./dependencies";

export const personRoutes = express.Router();
personRoutes.post('/register', registerPersonController.run.bind(registerPersonController));
personRoutes.put('/asignar_address/:id',updatePersonAddressController.run.bind(updatePersonAddressController))
personRoutes.get('/', getAllPersonController.listAllPersons.bind(getAllPersonController))
personRoutes.put('/validate/:id_user', ValidatePersonController.run.bind(ValidatePersonController)); 






