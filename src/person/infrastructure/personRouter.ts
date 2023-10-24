import express from 'express';

import {
<<<<<<< HEAD
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
=======
    ValidatePersonController,
} from "./dependencies";

export const personRoutes = express.Router();

personRoutes.put('/validate/:id_user', ValidatePersonController.run.bind(ValidatePersonController));
>>>>>>> 4937744aa77bfc5f0fd945fc037deae94137f9d1
