import { CancelPaymentUseCase } from "../application/cancelPaymentUseCase";
import { MariadbPaymentsRepository } from "./adapters/mariadbPaymentsRepository";
import { CancelPaymentController } from "./controllers/cancelPaymentController";


export const mariadbPaymentsRepository = new MariadbPaymentsRepository();


export const cancelPaymentUseCase = new CancelPaymentUseCase(mariadbPaymentsRepository);



export const cancelPaymentController = new CancelPaymentController(cancelPaymentUseCase);