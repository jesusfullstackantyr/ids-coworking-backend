import * as express from 'express';
import { paymentsController } from './dependencies';
import { PaymentsContoller } from '../controller/listPaymentController';

export const paymentRouter = express.Router();

paymentRouter.get(
    //listar todo
    "/listPayment",
    paymentsController.listAllPayments.bind(paymentsController)
)