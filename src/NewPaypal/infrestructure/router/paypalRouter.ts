import express from "express";
import { PController } from "../dependencies";
export const PaypalRoute = express.Router();

PaypalRoute.post("/create-payment",PController.createPaymentPaypal.bind(PController));
PaypalRoute.get("/execute-payment",PController.getPayment.bind(PController));
PaypalRoute.post("/createPayment",PController.createPayment.bind(PController));

