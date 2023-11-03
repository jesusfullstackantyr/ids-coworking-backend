import { PaymentMethodMariaDBAdapterRepository } from "./repositories/paymentsMariaDBAdapter";
import { PaymentMethodCreateUseCase } from '../application/useCases/paymentMethodCreateUseCase';
import { PaymentMethodCreateController } from './controllers/paymentMethodCreateController';
import { PaymentMethodGetAllController } from './controllers/paymentMethodGetAllController';
import { PaymentMethodGetAllUseCase } from '../application/useCases/paymentMethodGetAllUseCase';
import { PaymentMethodUpdateUseCase } from '../application/useCases/paymentMethodUpdateUseCase';
import { PaymentMethodUpdateController } from './controllers/paymentMethodUpdateController';
import { PaymentMethodDeleteUseCase } from '../application/useCases/paymentMethodDeleteUseCase';
import { PaymentMethodDeleteController } from './controllers/paymentMethodDeleteController';
import { PaymentMethodGetByIdUseCase } from "../application/paymentMethodGetByIdUseCase";
import { PaymentMethodGetByIdController } from "./controllers/paymentMethodGetByIdController";


const mariDBPaymentsAdapter = new PaymentMethodMariaDBAdapterRepository();
const createPaymentsUseCase = new PaymentMethodCreateUseCase(mariDBPaymentsAdapter);
export const paymentsCreateController = new PaymentMethodCreateController(createPaymentsUseCase);

const paymentsGetAllUseCase = new PaymentMethodGetAllUseCase(mariDBPaymentsAdapter);
export const paymentsGetAllController = new PaymentMethodGetAllController(paymentsGetAllUseCase);

const paymentsUpdateUseCase = new PaymentMethodUpdateUseCase(mariDBPaymentsAdapter);
export const paymentsUpdateController = new PaymentMethodUpdateController(paymentsUpdateUseCase);

const paymentsDeleteUseCase = new PaymentMethodDeleteUseCase(mariDBPaymentsAdapter);
export const paymentsDeleteController = new PaymentMethodDeleteController(paymentsDeleteUseCase);

const paymentsGetByIdUseCase = new PaymentMethodGetByIdUseCase(mariDBPaymentsAdapter);
export const paymentsGetByIdController = new PaymentMethodGetByIdController(paymentsGetByIdUseCase);

