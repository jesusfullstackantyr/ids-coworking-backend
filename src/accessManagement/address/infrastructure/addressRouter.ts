import express from 'express';

import {
    registerAddressController,
    updateAddressController,
    getAllAddressController,
    
} from "./dependencies";

export const addressRoutes = express.Router();
addressRoutes.post('/register', registerAddressController.run.bind(registerAddressController));
addressRoutes.put('/update/:id', updateAddressController.run.bind(updateAddressController));
//personRoutes.put('/asignar_address/:id',updatePersonAddressController.run.bind(updatePersonAddressController))
addressRoutes.get('/', getAllAddressController.listAllAddress.bind(getAllAddressController))