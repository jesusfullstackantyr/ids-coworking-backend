import express from 'express';

import {
    ValidatePersonController
    
} from "./dependencies";

export const personRoutes = express.Router();

personRoutes.put('/validate/:id_user', ValidatePersonController.run.bind(ValidatePersonController));