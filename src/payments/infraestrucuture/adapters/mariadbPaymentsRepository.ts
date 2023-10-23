import { query } from "../../../database/mariaDb";
import { Payment } from "../../domain/entities/payments";
import { PaymentRepository } from "../../domain/repositories/paymentRepository";

export class MariadbPaymentsRepository implements PaymentRepository {
    async listAllPayments(): Promise<Payment[]> {
        try {
          const sql = `
            SELECT id, amount, payment_date, status
            FROM payments
          `;
          const params: any[] = [];  // No hay parámetros en esta consulta
          const [rows]: any = await query(sql, params);
    
          const payments: Payment[] = rows.map((row: any) => {
            return new Payment(
              row.id,
              row.amount,
              row.payment_date,
              row.status,
            );
          });
    
          return payments;
        } catch (error) {
          console.error('Error al listar usuarios:', (error as Error).message);
          throw new Error('Error al listar usuarios');
        }
      }

    async cancelPayment(paymentId: number): Promise<Payment | null> {
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
            const params: any[] = [paymentId];
            await query(contractSql, params);
            await query(paymentMethodSql, params);
            await query(payment, params);
            await query(cardSql, params);

            // Obtener los datos del pago actualizado
            const updatedPayment = await this.getPaymentById(paymentId);

            return updatedPayment;
        } catch (error) {
            console.error('Error updating payment fields:', (error as Error).message);
            throw new Error('Error updating payment fields');
        }
    }
    private async getPaymentById(paymentId: number): Promise<Payment | null> {

        const sql = `
        SELECT payments.status AS payment, card.status AS card,  payment_method.status AS payment_method,  contract.status AS contract
            FROM payments LEFT JOIN card ON payments.id = card.id_folio
                LEFT JOIN payment_method ON payments.id = payment_method.id
                    LEFT JOIN contract ON payments.id = contract.id
                        WHERE payments.id = ?
        `;

        const params: any[] = [paymentId];
        const results: any = await query(sql, params);

        if (results && results.length > 0) {
            return results[0];
        } else {
            return null;
        }
    }

}
