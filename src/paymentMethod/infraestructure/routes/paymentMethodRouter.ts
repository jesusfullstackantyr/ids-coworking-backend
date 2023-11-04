import express, {Router} from "express";
import {  paymentMethodActiveController, paymentMethodInactiveController } from "../dependencies";

export const paymentsRouter:Router = express.Router();

paymentsRouter.put("/acc/:id", paymentMethodActiveController.setActivePayment.bind(paymentMethodActiveController));

paymentsRouter.put("/inn/:id", paymentMethodInactiveController.setInactivePayment.bind(paymentMethodInactiveController));


