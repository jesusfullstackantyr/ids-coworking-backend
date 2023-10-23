import { CancelPaymentUseCase } from "../application/cancelPaymentUseCase";
import { ListAllPaymentUseCase } from "../application/listAllPaymentsUseCase";
import { MariadbPaymentsRepository } from "./adapters/mariadbPaymentsRepository";
import { CancelPaymentController } from "./controllers/cancelPaymentController";
import { PaymentsContoller } from "./controllers/listPaymentController";


export const mariadbPaymentsRepository = new MariadbPaymentsRepository();


export const cancelPaymentUseCase = new CancelPaymentUseCase(mariadbPaymentsRepository);
export const listAllPaymentUseCase = new ListAllPaymentUseCase(mariadbPaymentsRepository);


export const cancelPaymentController = new CancelPaymentController(cancelPaymentUseCase);
export const paymentsContoller = new PaymentsContoller(listAllPaymentUseCase);




