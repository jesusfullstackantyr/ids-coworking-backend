import express from 'express';
import { makePaymentController } from './dependencies';


export const cardRoutes = express.Router();


cardRoutes.post('/', makePaymentController.run.bind(makePaymentController))
