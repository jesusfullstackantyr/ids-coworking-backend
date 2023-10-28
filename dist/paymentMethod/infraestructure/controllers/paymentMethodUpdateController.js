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
exports.PaymentMethodUpdateController = void 0;
class PaymentMethodUpdateController {
    constructor(paymentsUpdateUseCase) {
        this.paymentsUpdateUseCase = paymentsUpdateUseCase;
    }
    updatePayments(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, name, status, pb_key_prod, pd_key_prod, pb_key_test, pd_key_test } = request.body;
                const updatedPaymentData = {
                    id, name, status, pb_key_prod, pd_key_prod, pb_key_test, pd_key_test
                };
                const updatedPayment = yield this.paymentsUpdateUseCase.execute(id, updatedPaymentData);
                if (updatedPayment) {
                    return response.status(200).json(updatedPayment);
                }
                else {
                    return response.status(404).json({ message: 'El pago no se encontró para actualizar.' });
                }
            }
            catch (error) {
                response.status(500).json({
                    message: 'Error while updating payment',
                    error: error.message,
                });
            }
        });
    }
}
exports.PaymentMethodUpdateController = PaymentMethodUpdateController;
