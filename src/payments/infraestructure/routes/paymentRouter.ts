import * as express from 'express';
import { paymentsContoller } from '../dependencies';
import { PaymentsContoller } from '../controller/listPaymentController';

export const paymentRouter = express.Router();

paymentRouter.get(
    //listar todo
    "/listPayment",
    paymentsContoller.listAllPayments.bind(paymentsContoller)
)