"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentsContoller = exports.listAllPaymentUseCase = exports.mariadbPaymentsRepository = void 0;
const listAllPaymentsUseCase_1 = require("../application/listAllPaymentsUseCase");
const mariadbPaymentsRepository_1 = require("./adapters/mariadbPaymentsRepository");
const listPaymentController_1 = require("./controllers/listPaymentController");
exports.mariadbPaymentsRepository = new mariadbPaymentsRepository_1.MariadbPaymentsRepository();
exports.listAllPaymentUseCase = new listAllPaymentsUseCase_1.ListAllPaymentUseCase(exports.mariadbPaymentsRepository);
exports.paymentsContoller = new listPaymentController_1.PaymentsContoller(exports.listAllPaymentUseCase);
