"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethodCreateUseCase = void 0;
const paymentsMethod_1 = require("../domain/entities/paymentsMethod");
const paymentMethodValidate_1 = require("../domain/validators/paymentMethodValidate");
class PaymentMethodCreateUseCase {
    constructor(paymentRepository) {
        this.paymentRepository = paymentRepository;
    }
    execute(id, name, status, pb_key_prod, pd_key_prod, pb_key_test, pd_key_test) {
        return __awaiter(this, void 0, void 0, function* () {
            let payment = new paymentsMethod_1.PaymentMethod(id, name, status, pb_key_prod, pd_key_prod, pb_key_test, pd_key_test);
            let paymentValidate = new paymentMethodValidate_1.paymentsValidate(payment);
            yield paymentValidate.invalidIfHasErrors();
            let createdPayments = yield this.paymentRepository.createPayments(payment);
            return createdPayments;
        });
    }
}
exports.PaymentMethodCreateUseCase = PaymentMethodCreateUseCase;
