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
exports.PaymentsContoller = void 0;
class PaymentsContoller {
    constructor(listAllPaymentUseCase) {
        this.listAllPaymentUseCase = listAllPaymentUseCase;
    }
    listAllPayments(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payments = yield this.listAllPaymentUseCase.getAllPayments();
                if (payments && payments.length > 0) {
                    return res.status(200).json({
                        status: 'success',
                        data: payments,
                        message: 'Lista de pagos obtenida exitosamente',
                    });
                }
                return res.status(404).json({
                    status: 'error',
                    message: 'No se encontraron pagos',
                });
            }
            catch (error) {
                if (error instanceof Error) {
                    if (error.message.startsWith('[')) {
                        return res.status(400).send({
                            status: "error",
                            message: "Validation failed",
                            errors: JSON.parse(error.message)
                        });
                    }
                }
                return res.status(500).send({
                    status: "error",
                    message: "An error occurred."
                });
            }
        });
    }
}
exports.PaymentsContoller = PaymentsContoller;
