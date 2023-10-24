import express from 'express';

import {
<<<<<<< HEAD
    
    registerPersonController
=======
    updatePersonAddressController,
    getAllPersonController,
>>>>>>> eb33269aad852f9d8c41ad3af7075e180e2f12f5
    
} from "./dependencies";

export const personRoutes = express.Router();
<<<<<<< HEAD

personRoutes.post('/register', registerPersonController.run.bind(registerPersonController));
=======
personRoutes.put('/asignar_address/:id',updatePersonAddressController.run.bind(updatePersonAddressController))
personRoutes.get('/', getAllPersonController.listAllPersons.bind(getAllPersonController))
>>>>>>> eb33269aad852f9d8c41ad3af7075e180e2f12f5
