import express, {Router} from "express";
import { paymentsCreateController, paymentsDeleteController, paymentsGetAllController, paymentsUpdateController,  paymentMethodActiveController, paymentMethodInactiveController  } from "../dependencies";

export const paymentsRouter:Router = express.Router();

paymentsRouter.post("/",paymentsCreateController.createPayments.bind(paymentsCreateController));

paymentsRouter.get("/",paymentsGetAllController.getAllPayments.bind(paymentsGetAllController));

paymentsRouter.put("/", paymentsUpdateController.updatePayments.bind(paymentsUpdateController));

paymentsRouter.delete("/:id", paymentsDeleteController.deletePayment.bind(paymentsDeleteController));

paymentsRouter.put("/acc/:id", paymentMethodActiveController.setActivePayment.bind(paymentMethodActiveController));

paymentsRouter.put("/inn/:id", paymentMethodInactiveController.setInactivePayment.bind(paymentMethodInactiveController));
