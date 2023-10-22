import express from 'express';

import {
    RegisterPersonController
    
} from "./dependencies";

export const personRoutes = express.Router();

personRoutes.post('/create', RegisterPersonController.run.bind(RegisterPersonController));