import { PaymentsMariaDBAdapterRepository } from "./adapters/paymentsMariaDBAdapter";
import { CreatePaymentsUseCase } from '../application/paymentsUseCase';
import { PaymentsCreateController } from './controllers/paymentsCreateController';
import { PaymentsGetAllController } from './controllers/paymentsGetAllController';
import { PaymentsGetAllUseCase } from '../application/paymentsGetAllUseCase';
import { PaymentsUpdateUseCase } from '../application/paymentsUpdateUseCase';
import { PaymentsUpdateController } from './controllers/paymentsUpdateController';
import { PaymentsDeleteUseCase } from '../application/paymentsDeleteUseCase';
import { PaymentsDeleteController } from './controllers/paymentsDeleteController';

const mariDBPaymentsAdapter = new PaymentsMariaDBAdapterRepository();
const createPaymentsUseCase = new CreatePaymentsUseCase(mariDBPaymentsAdapter);
export const paymentsCreateController = new PaymentsCreateController(createPaymentsUseCase);

const paymentsGetAllUseCase = new PaymentsGetAllUseCase(mariDBPaymentsAdapter);
export const paymentsGetAllController = new PaymentsGetAllController(paymentsGetAllUseCase);

const paymentsUpdateUseCase = new PaymentsUpdateUseCase(mariDBPaymentsAdapter);
export const paymentsUpdateController = new PaymentsUpdateController(paymentsUpdateUseCase);

const paymentsDeleteUseCase = new PaymentsDeleteUseCase(mariDBPaymentsAdapter);
export const paymentsDeleteController = new PaymentsDeleteController(paymentsDeleteUseCase);

