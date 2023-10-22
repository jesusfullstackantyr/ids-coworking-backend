import { MysqlUserRepository } from './adapters/database/mysqlUserRepository';
import { ListAllPaymentUseCase } from "../application/listAllPaymentsUseCase";
import { PaymentsContoller } from './controller/listPaymentController';

export const mysqlUserRepository = new MysqlUserRepository();

export const listAllPaymentUseCase = new ListAllPaymentUseCase(mysqlUserRepository);

export const paymentsContoller = new PaymentsContoller(listAllPaymentUseCase);

