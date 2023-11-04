import { PaymentMethodMariaDBAdapterRepository } from "./adapters/paymentsMariaDBAdapter";
import { PaymentMethodCreateUseCase } from '../application/paymentMethodCreateUseCase';
import { PaymentMethodCreateController } from './controllers/paymentMethodCreateController';
import { PaymentMethodGetAllController } from './controllers/paymentMethodGetAllController';
import { PaymentMethodGetAllUseCase } from '../application/paymentMethodGetAllUseCase';
import { PaymentMethodUpdateUseCase } from '../application/paymentMethodUpdateUseCase';
import { PaymentMethodUpdateController } from './controllers/paymentMethodUpdateController';
import { PaymentMethodDeleteUseCase } from '../application/paymentMethodDeleteUseCase';
import { PaymentMethodDeleteController } from './controllers/paymentMethodDeleteController';

// set Active
import { PaymentMethodActiveController } from "./controllers/paymentMethodActiveController";
import { PaymentMethodActiveUseCase } from "../application/paymentMethodActiveUseCase";
// Set Inactive
import { PaymentMethodInactiveController } from "./controllers/paymentMethodInactiveController";
import { PaymentMethodInactiveUseCase } from "../application/paymentMethodInactiveUseCase";



const mariDBPaymentsAdapter = new PaymentMethodMariaDBAdapterRepository();
const createPaymentsUseCase = new PaymentMethodCreateUseCase(mariDBPaymentsAdapter);
export const paymentsCreateController = new PaymentMethodCreateController(createPaymentsUseCase);

const paymentsGetAllUseCase = new PaymentMethodGetAllUseCase(mariDBPaymentsAdapter);
export const paymentsGetAllController = new PaymentMethodGetAllController(paymentsGetAllUseCase);

const paymentsUpdateUseCase = new PaymentMethodUpdateUseCase(mariDBPaymentsAdapter);
export const paymentsUpdateController = new PaymentMethodUpdateController(paymentsUpdateUseCase);

const paymentsDeleteUseCase = new PaymentMethodDeleteUseCase(mariDBPaymentsAdapter);
export const paymentsDeleteController = new PaymentMethodDeleteController(paymentsDeleteUseCase);

const paymentActiveUseCase = new PaymentMethodActiveUseCase(mariDBPaymentsAdapter);
export const paymentMethodActiveController = new PaymentMethodActiveController(paymentActiveUseCase);

const paymentMethodInactiveUseCase = new PaymentMethodInactiveUseCase(mariDBPaymentsAdapter);
export const paymentMethodInactiveController = new PaymentMethodInactiveController(paymentMethodInactiveUseCase);



