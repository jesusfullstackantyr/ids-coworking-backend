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
exports.PaymentMethodCreateController = void 0;
class PaymentMethodCreateController {
    constructor(createPaymentsUseCase) {
        this.createPaymentsUseCase = createPaymentsUseCase;
    }
    createPayments(request, response) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { id, name, status, pb_key_prod, pd_key_prod, pb_key_test, pd_key_test } = request.body;
                let payment = yield this.createPaymentsUseCase.execute(id, name, status, pb_key_prod, pd_key_prod, pb_key_test, pd_key_test);
                return response.status(200)
                    .json(payment);
            }
            catch (error) {
                response.status((_a = error.http_status) !== null && _a !== void 0 ? _a : 500)
                    .json({
                    message: "Error while creating payment",
                    error: error
                });
            }
        });
    }
}
exports.PaymentMethodCreateController = PaymentMethodCreateController;
