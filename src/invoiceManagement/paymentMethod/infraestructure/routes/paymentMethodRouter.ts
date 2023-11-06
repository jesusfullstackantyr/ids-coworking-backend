import express, {Router} from "express";
import { paymentMethodActiveController, paymentMethodInactiveController, paymentsCreateController, paymentsDeleteController, paymentsGetAllController, paymentsGetByIdController, paymentsUpdateController } from "../dependencies";

export const paymentsRouter:Router = express.Router();

paymentsRouter.post("/",paymentsCreateController.createPayments.bind(paymentsCreateController));

paymentsRouter.get("/",paymentsGetAllController.getAllPayments.bind(paymentsGetAllController));

paymentsRouter.put("/:id", paymentsUpdateController.updatePayments.bind(paymentsUpdateController));

paymentsRouter.delete("/:id", paymentsDeleteController.deletePayment.bind(paymentsDeleteController));

paymentsRouter.get("/:id",paymentsGetByIdController.getPaymentBiyd.bind(paymentsGetByIdController));

paymentsRouter.put("/acc/:id", paymentMethodActiveController.setActivePayment.bind(paymentMethodActiveController));

paymentsRouter.put("/inn/:id", paymentMethodInactiveController.setInactivePayment.bind(paymentMethodInactiveController));