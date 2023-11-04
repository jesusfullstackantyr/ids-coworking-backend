import { query } from "../../../../database/mariaDb";
import { Payment } from "../../../domain/entities/payments";
import { PaymentRepository } from "../../../domain/repositories/paymentRepository";

export class MysqlUserRepository implements PaymentRepository {

    async listAllPayments(): Promise<Payment[]> {
        try {
          const sql = `
            SELECT id, amount, payment_date
            FROM openpay
          `;
          const params: any[] = [];  // No hay parámetros en esta consulta
          const [rows]: any = await query(sql, params);
    
          const payments: Payment[] = rows.map((row: any) => {
            return new Payment(
              row.id,
              row.amount,
              row.payment_date,
            );
          });
    
          return payments;
        } catch (error) {
          console.error('Error al listar usuarios:', (error as Error).message);
          throw new Error('Error al listar usuarios');
        }
      }
}