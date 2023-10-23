import { query } from "../../../database/mariaDb";
import { Payment } from "../../domain/entities/payments";
import { PaymentRepository } from "../../domain/repositories/paymentRepository";

export class PaymentsMariaDBAdapterRepository implements PaymentRepository {
  async updatePayment(id: number, updatedPaymentData: Partial<Payment>): Promise<Payment | null> {
    try {
      
      const { amount, payment_date, status, id_user, id_rental } = updatedPaymentData;
      if (!amount || !payment_date || !status || !id_user || !id_rental) {
        throw new Error('Faltan datos obligatorios para actualizar el pago.');
      }
    
      const sql = "UPDATE payment SET amount = ?, payment_date = ?, status = ?, id_user = ?, id_rental = ? WHERE id = ?";
      const params: any[] = [amount, payment_date, status, id_user, id_rental, id];
      const result: any = await query(sql, params);
  
      if (result.affectedRows > 0) {
        return new Payment(id, amount, payment_date, status, id_user, id_rental);
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error al actualizar el pago:', error);
      throw error;
    }
  }
  
  
  
  async deletePayment(id: number): Promise<boolean> {
    try {
      const sql = "DELETE FROM payment WHERE id = ?";
      const params: any[] = [id];
      const result: any = await query(sql, params);
  
      if (result && typeof result.affectedRows === 'number') {
        return result.affectedRows > 0;
      } else {
        throw new Error("No se pudo eliminar el pago.");
      }
    } catch (error) {
      console.error("Error al eliminar el pago:", error);
      throw error;
    }
  }  

  async getAllPayments(): Promise<Payment[]> {
    try {
      const sql = "SELECT * FROM payment";
      const params = ["Confirmado"];
      const results: any[] = await query(sql, params);
      if (!Array.isArray(results)) {
        throw new Error('Error al obtener los pagos desde la base de datos');
      }
      const payments: Payment[] = results.map((row) => {
        return new Payment(row.id, row.amount, row.payment_date, row.status, row.id_user, row.id_rental);
      });
      return payments;
    } catch (error) {
      console.error('Error al obtener todos los pagos:', error);
      throw error;
    }
  }

  async createPayments(payment: Payment): Promise<Payment | null> {
    try {
      const { id, amount, payment_date, status, id_user, id_rental } = payment;

      if (!amount || !payment_date || !status || !id_user || !id_rental) {
        throw new Error('Faltan datos obligatorios para crear el pago.');
      }
      const sql = "INSERT INTO payment (amount, payment_date, status, id_user, id_rental) VALUES (?, ?, ?, ?, ?)";
      const params: any[] = [amount, payment_date, status, id_user, id_rental];
      const result: any = await query(sql, params);

      if (result.affectedRows > 0) {
        return new Payment(result.id, amount, payment_date, status, id_user, id_rental);
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error al crear el pago:', error);
      throw error;
    }
  }
}
