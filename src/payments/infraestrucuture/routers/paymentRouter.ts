import * as express from 'express';
import { paymentsContoller } from '../dependences';


export const paymentRouter = express.Router();


paymentRouter.get(
    //listar todo
    "/listPayment",
    paymentsContoller.listAllPayments.bind(paymentsContoller)
)