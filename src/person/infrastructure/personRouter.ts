import express from 'express';

import {
    
    registerPersonController
    
} from "./dependencies";

export const personRoutes = express.Router();

personRoutes.post('/register', registerPersonController.run.bind(registerPersonController));