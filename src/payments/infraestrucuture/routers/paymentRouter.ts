import * as express from 'express';
import { cancelPaymentController, makePaymentController, paymentsContoller } from '../dependences';


export const paymentRouter = express.Router();


paymentRouter.put(

    "/cancelPayment",
     cancelPaymentController.run.bind(cancelPaymentController)
);

paymentRouter.get(
    //listar todo
    "/listPayment",
    paymentsContoller.listAllPayments.bind(paymentsContoller)
)

paymentRouter.post('/', 
    makePaymentController.run.bind(makePaymentController)
)