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
exports.PaymentMethodMariaDBAdapterRepository = void 0;
const mariaDb_1 = require("../../../database/mariaDb");
const paymentsMethod_1 = require("../../domain/entities/paymentsMethod");
class PaymentMethodMariaDBAdapterRepository {
    updatePayment(id, updatedPaymentData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, status, pb_key_prod, pd_key_prod, pb_key_test, pd_key_test } = updatedPaymentData;
                if (!name || !status || !pb_key_prod || !pd_key_prod || !pb_key_test || !pd_key_test) {
                    throw new Error('Faltan datos obligatorios para actualizar el pago.');
                }
                const sql = "UPDATE paymentMethod SET name = ?, status = ?, pb_key_prod = ?, pd_key_prod = ?, pb_key_test = ?, pd_key_test = ? WHERE id = ?";
                const params = [name, status, pb_key_prod, pd_key_prod, pb_key_test, pd_key_test, id];
                const result = yield (0, mariaDb_1.query)(sql, params);
                if (result.affectedRows > 0) {
                    return new paymentsMethod_1.PaymentMethod(id, name, status, pb_key_prod, pd_key_prod, pb_key_test, pd_key_test);
                }
                else {
                    return null;
                }
            }
            catch (error) {
                console.error('Error al actualizar el pago:', error);
                throw error;
            }
        });
    }
    deletePayment(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = "DELETE FROM paymentMethod WHERE id = ?";
                const params = [id];
                const result = yield (0, mariaDb_1.query)(sql, params);
                if (result && typeof result.affectedRows === 'number') {
                    return result.affectedRows > 0;
                }
                else {
                    throw new Error("No se pudo eliminar el pago.");
                }
            }
            catch (error) {
                console.error("Error al eliminar el pago:", error);
                throw error;
            }
        });
    }
    getAllPayments() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = "SELECT * FROM paymentMethod";
                const params = ["Confirmado"];
                const results = yield (0, mariaDb_1.query)(sql, params);
                if (!Array.isArray(results)) {
                    throw new Error('Error al obtener los pagos desde la base de datos');
                }
                const payments = results.map((row) => {
                    return new paymentsMethod_1.PaymentMethod(row.id, row.name, row.status, row.pb_key_prod, row.pd_key_prod, row.pb_key_test, row.pd_key_testd);
                });
                return payments;
            }
            catch (error) {
                console.error('Error al obtener todos los pagos:', error);
                throw error;
            }
        });
    }
    createPayments(payment) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, name, status, pb_key_prod, pd_key_prod, pb_key_test, pd_key_test } = payment;
                if (!name || !status || !pb_key_prod || !pd_key_prod || !pb_key_test || !pd_key_test) {
                    throw new Error('Faltan datos obligatorios para crear el pago.');
                }
                const sql = "INSERT INTO paymentMethod (name, status, pb_key_prod,  pd_key_prod, pb_key_test, pd_key_test) VALUES (?, ?, ?, ?, ?, ?)";
                const params = [name, status, pb_key_prod, pd_key_prod, pb_key_test, pd_key_test];
                const result = yield (0, mariaDb_1.query)(sql, params);
                if (result.affectedRows > 0) {
                    return new paymentsMethod_1.PaymentMethod(result.id, name, status, pb_key_prod, pd_key_prod, pb_key_test, pd_key_test);
                }
                else {
                    return null;
                }
            }
            catch (error) {
                console.error('Error al crear el pago:', error);
                throw error;
            }
        });
    }
}
exports.PaymentMethodMariaDBAdapterRepository = PaymentMethodMariaDBAdapterRepository;
