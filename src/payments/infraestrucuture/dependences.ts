import { MakePaymentUseCase } from "../application/MakePaymentUseCase";
import { ListAllPaymentUseCase } from "../application/listAllPaymentsUseCase";
import { MariadbCardRepository } from "./adapters/mariadbPaymentRepository";
import { MakePaymentController } from "./controllers/MakePaymentController";
import { PaymentsContoller } from "./controllers/listPaymentController";
import { GetPaymentByIdController } from "./controllers/getPaymentByIdController";
import { GetPaymentByIdUseCase } from "../application/getPaymentByIdUseCase";


export const mariadbPaymentsRepository = new MariadbCardRepository();

// Casos de uso
export const cancelPaymentUseCase = new MakePaymentUseCase(mariadbPaymentsRepository);
export const makePaymentUseCase = new MakePaymentUseCase(mariadbPaymentsRepository);
export const getPaymentByIdUseCase = new GetPaymentByIdUseCase(mariadbPaymentsRepository);
export const listAllPaymentUseCase = new ListAllPaymentUseCase(mariadbPaymentsRepository);

// Controladores
export const paymentsContoller = new PaymentsContoller(listAllPaymentUseCase);
export const cancelPaymentController = new MakePaymentController(cancelPaymentUseCase);
export const makePaymentController =  new MakePaymentController(makePaymentUseCase);
export const getPaymentByIdController = new GetPaymentByIdController(getPaymentByIdUseCase);