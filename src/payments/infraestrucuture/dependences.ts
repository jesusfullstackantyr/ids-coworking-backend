import { MakePaymentUseCase } from "../application/MakePaymentUseCase";
import { CancelPaymentUseCase } from "../application/cancelPaymentUseCase";
import { ListAllPaymentUseCase } from "../application/listAllPaymentsUseCase";
import { MariadbCardRepository } from "./adapters/mariadbPaymentRepository";
import { MakePaymentController } from "./controllers/MakePaymentController";
import { CancelPaymentController } from "./controllers/cancelPaymentController";
import { PaymentsContoller } from "./controllers/listPaymentController";


export const mariadbPaymentsRepository = new MariadbCardRepository();


export const cancelPaymentUseCase = new CancelPaymentUseCase(mariadbPaymentsRepository);
export const listAllPaymentUseCase = new ListAllPaymentUseCase(mariadbPaymentsRepository);


export const cancelPaymentController = new CancelPaymentController(cancelPaymentUseCase);
export const paymentsContoller = new PaymentsContoller(listAllPaymentUseCase);

export const makePaymentUseCase = new MakePaymentUseCase(mariadbPaymentsRepository)
export const makePaymentController =  new MakePaymentController(makePaymentUseCase)




