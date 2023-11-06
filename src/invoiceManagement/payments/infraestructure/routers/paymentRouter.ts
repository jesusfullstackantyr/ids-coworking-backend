import * as express from 'express';
import { cancelPaymentController, makePaymentController, paymentsContoller } from '../dependences';
import { paymentsRouter } from '../../../paymentMethod/infraestructure/routes/paymentMethodRouter';
import { paymentsCreateController, paymentsDeleteController, paymentsGetAllController, paymentsUpdateController } from '../../../paymentMethod/infraestructure/dependencies';



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

paymentsRouter.post("/",paymentsCreateController.createPayments.bind(paymentsCreateController));

paymentsRouter.get("/",paymentsGetAllController.getAllPayments.bind(paymentsGetAllController));

paymentsRouter.put("/", paymentsUpdateController.updatePayments.bind(paymentsUpdateController));

paymentsRouter.delete("/:id", paymentsDeleteController.deletePayment.bind(paymentsDeleteController));