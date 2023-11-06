import express from 'express';

import {
    registerAddressController,
    updateAddressController,
    getAllAddressController,
    
} from "../dependencies";

export const addressRoutes = express.Router();
addressRoutes.post('/', registerAddressController.run.bind(registerAddressController));
addressRoutes.put('/:id', updateAddressController.run.bind(updateAddressController));
addressRoutes.get('/', getAllAddressController.listAllAddress.bind(getAllAddressController));