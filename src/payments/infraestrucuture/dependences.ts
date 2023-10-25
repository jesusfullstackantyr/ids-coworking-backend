import { ListAllPaymentUseCase } from "../application/listAllPaymentsUseCase";
import { MariadbPaymentsRepository } from "./adapters/mariadbPaymentsRepository";
import { PaymentsContoller } from "./controllers/listPaymentController";


export const mariadbPaymentsRepository = new MariadbPaymentsRepository();


export const listAllPaymentUseCase = new ListAllPaymentUseCase(mariadbPaymentsRepository);

export const paymentsContoller = new PaymentsContoller(listAllPaymentUseCase);




