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
exports.MariadbPaymentsRepository = void 0;
const mariaDb_1 = require("../../../database/mariaDb");
const payments_1 = require("../../domain/entities/payments");
class MariadbPaymentsRepository {
    listAllPayments() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = `
            SELECT id, amount, payment_date, status
            FROM payments
          `;
                const params = []; // No hay parámetros en esta consulta
                const [rows] = yield (0, mariaDb_1.query)(sql, params);
                const payments = rows.map((row) => {
                    return new payments_1.Payment(row.id, row.amount, row.payment_date, row.status);
                });
                return payments;
            }
            catch (error) {
                console.error('Error al listar usuarios:', error.message);
                throw new Error('Error al listar usuarios');
            }
        });
    }
    cancelPayment(paymentId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (typeof paymentId !== 'number' || isNaN(paymentId) || paymentId <= 0) {
                    throw new Error('The payment ID is not valid.');
                }
                // Sentencia SQL para actualizar el campo 'contract'
                const contractSql = `
                UPDATE Payments
                SET status = 'cancel'
                WHERE id = ?
            `;
                // Sentencia SQL para actualizar el campo 'payment_method'
                const paymentMethodSql = `
                UPDATE contract
                SET status = 'cancel'
                WHERE id = ?
            `;
                // Sentencia SQL para actualizar el campo 'Card'
                const payment = `
                UPDATE payment_method
                SET status = 'cancel'
                WHERE id = ?
            `;
                const cardSql = `
              UPDATE Card
                 SET status = 'cancel'
                     WHERE id_folio = ?
                                        `;
                // Ejecutar las consultas SQL
                const params = [paymentId];
                yield (0, mariaDb_1.query)(contractSql, params);
                yield (0, mariaDb_1.query)(paymentMethodSql, params);
                yield (0, mariaDb_1.query)(payment, params);
                yield (0, mariaDb_1.query)(cardSql, params);
                // Obtener los datos del pago actualizado
                const updatedPayment = yield this.getPaymentById(paymentId);
                return updatedPayment;
            }
            catch (error) {
                console.error('Error updating payment fields:', error.message);
                throw new Error('Error updating payment fields');
            }
        });
    }
    getPaymentById(paymentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `
        SELECT payments.status AS payment, card.status AS card,  payment_method.status AS payment_method,  contract.status AS contract
            FROM payments LEFT JOIN card ON payments.id = card.id_folio
                LEFT JOIN payment_method ON payments.id = payment_method.id
                    LEFT JOIN contract ON payments.id = contract.id
                        WHERE payments.id = ?
        `;
            const params = [paymentId];
            const results = yield (0, mariaDb_1.query)(sql, params);
            if (results && results.length > 0) {
                return results[0];
            }
            else {
                return null;
            }
        });
    }
}
exports.MariadbPaymentsRepository = MariadbPaymentsRepository;
