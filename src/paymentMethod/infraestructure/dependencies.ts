import { PaymentMethodMariaDBAdapterRepository } from "./adapters/paymentsMariaDBAdapter";

// set Active
import { PaymentMethodActiveController } from "./controllers/paymentMethodActiveController";
import { PaymentMethodActiveUseCase } from "../application/paymentMethodActiveUseCase";
// Set Inactive
import { PaymentMethodInactiveController } from "./controllers/paymentMethodInactiveController";
import { PaymentMethodInactiveUseCase } from "../application/paymentMethodInactiveUseCase";



const mariDBPaymentsAdapter = new PaymentMethodMariaDBAdapterRepository();

const paymentActiveUseCase = new PaymentMethodActiveUseCase(mariDBPaymentsAdapter);
export const paymentMethodActiveController = new PaymentMethodActiveController(paymentActiveUseCase);

const paymentMethodInactiveUseCase = new PaymentMethodInactiveUseCase(mariDBPaymentsAdapter);
export const paymentMethodInactiveController = new PaymentMethodInactiveController(paymentMethodInactiveUseCase);

