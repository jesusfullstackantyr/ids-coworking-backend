import express, {Router} from "express";
import { paymentsCreateController, paymentsDeleteController, paymentsGetAllController, paymentsGetByIdController, paymentsUpdateController } from "../dependencies";

export const paymentsRouter:Router = express.Router();

paymentsRouter.post("/",paymentsCreateController.createPayments.bind(paymentsCreateController));

paymentsRouter.get("/",paymentsGetAllController.getAllPayments.bind(paymentsGetAllController));

paymentsRouter.put("/", paymentsUpdateController.updatePayments.bind(paymentsUpdateController));

paymentsRouter.delete("/:id", paymentsDeleteController.deletePayment.bind(paymentsDeleteController));

paymentsRouter.get("/:id", paymentsGetByIdController.getPaymentBiyd.bind(paymentsGetByIdController));