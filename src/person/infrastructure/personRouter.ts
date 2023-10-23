import express from 'express';

import {
    ValidatePersonController,
    DisapprovedPersonController
} from "./dependencies";

export const personRoutes = express.Router();

personRoutes.put('/validate/:id_user', ValidatePersonController.run.bind(ValidatePersonController));
personRoutes.put('/disapprovedP/:id_user', ValidatePersonController.run.bind(DisapprovedPersonController));
