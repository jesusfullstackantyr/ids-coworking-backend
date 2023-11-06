import express from "express";
import { PController } from "../dependencies";
export const PaypalRoute = express.Router();

PaypalRoute.post("/paypal/:id",PController.createPaymentPaypal.bind(PController));
PaypalRoute.get("/extracter_payment",PController.getPayment.bind(PController));
PaypalRoute.post("/payment",PController.createPayment.bind(PController));

