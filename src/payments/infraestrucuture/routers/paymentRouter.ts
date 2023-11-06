import * as express from 'express';
import { cancelPaymentController, getPaymentByIdController, makePaymentController, paymentsContoller } from '../dependences';

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

paymentRouter.get(
    //obtener un pago por id
    "/:id",
    getPaymentByIdController.getPaymentById.bind(getPaymentByIdController)
)

paymentRouter.post('/', 
    makePaymentController.run.bind(makePaymentController)
)