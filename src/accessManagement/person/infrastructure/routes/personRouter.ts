import express from 'express';

import {
    ValidatePersonController,
    registerPersonController,
    updatePersonController,
    updatePersonAddressController,
    getAllPersonController
} from "../dependencies";

export const personRoutes = express.Router();

personRoutes.post('/', registerPersonController.run.bind(registerPersonController));
personRoutes.put('/:id', updatePersonController.run.bind(updatePersonController));
personRoutes.put('/validate/:id_user', ValidatePersonController.run.bind(ValidatePersonController));
personRoutes.put('/:id',updatePersonAddressController.run.bind(updatePersonAddressController));
personRoutes.get('/', getAllPersonController.listAllPersons.bind(getAllPersonController));