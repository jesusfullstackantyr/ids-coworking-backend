import { ListAllPaymentUseCase } from "../../application/listAllPaymentsUseCase";
import { MysqlUserRepository } from "../adapters/database/mysqlUserRepository";
import { PaymentsContoller } from "../controller/listPaymentController";

export const mysqlUserRepository = new MysqlUserRepository();

export const listAllPaymentsUseCase = new ListAllPaymentUseCase(mysqlUserRepository);

export const paymentsController = new PaymentsContoller(listAllPaymentsUseCase);