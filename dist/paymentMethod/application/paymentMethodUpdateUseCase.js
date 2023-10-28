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
exports.PaymentMethodUpdateUseCase = void 0;
const paymentsMethod_1 = require("../domain/entities/paymentsMethod");
const paymentMethodValidate_1 = require("../domain/validators/paymentMethodValidate");
class PaymentMethodUpdateUseCase {
    constructor(paymentRepository) {
        this.paymentRepository = paymentRepository;
    }
    execute(id, updatedData) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedPayment = new paymentsMethod_1.PaymentMethod(id, updatedData.name, updatedData.status, updatedData.pb_key_prod, updatedData.pd_key_prod, updatedData.pb_key_test, updatedData.pd_key_test);
            const paymentValidate = new paymentMethodValidate_1.paymentsValidate(updatedPayment);
            yield paymentValidate.invalidIfHasErrors();
            const updatedPaymentResult = yield this.paymentRepository.updatePayment(id, updatedPayment);
            if (!updatedPaymentResult) {
                throw new Error(`No se pudo actualizar el pago con el ID ${id}.`);
            }
            return updatedPaymentResult;
        });
    }
}
exports.PaymentMethodUpdateUseCase = PaymentMethodUpdateUseCase;
