import * as express from 'express';
import { cancelPaymentController } from '../dependences';


export const paymentRouter = express.Router();


paymentRouter.put(

    "/cancelPayment",
     cancelPaymentController.run.bind(cancelPaymentController)
);
