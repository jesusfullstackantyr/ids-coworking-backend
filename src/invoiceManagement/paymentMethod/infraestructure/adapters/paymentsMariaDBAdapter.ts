import { query } from "../../../../database/mariaDb";
import { PaymentMethod } from "../../domain/entities/paymentsMethod";
import { PaymentRepository } from "../../domain/repositories/paymentMethodRepository";

export class PaymentMethodMariaDBAdapterRepository implements PaymentRepository {
  async updatePayment(id: number, updatedPaymentData: Partial<PaymentMethod>): Promise<PaymentMethod | null> {
    try {
      
      const { name, status, pb_key_prod, pd_key_prod, pb_key_test, pd_key_test} = updatedPaymentData;
      if (!name || !status ||  !pb_key_prod|| !pd_key_prod|| !pb_key_test|| !pd_key_test) {
        throw new Error('Faltan datos obligatorios para actualizar el pago.');
      }
    
      const sql = "UPDATE paymentMethod SET name = ?, status = ?, pb_key_prod = ?, pd_key_prod = ?, pb_key_test = ?, pd_key_test = ? WHERE id = ?";
      const params: any[] = [name, status, pb_key_prod, pd_key_prod, pb_key_test, pd_key_test, id];
      const result: any = await query(sql, params);
  
      if (result.affectedRows > 0) {
        return new PaymentMethod(id, name, status, pb_key_prod, pd_key_prod, pb_key_test, pd_key_test);
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
      const sql = "DELETE FROM paymentMethod WHERE id = ?";
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

  async getAllPayments(): Promise<PaymentMethod[]> {
    try {
      const sql = "SELECT * FROM paymentMethod";
      const params = ["Confirmado"];
      const results: any[] = await query(sql, params);
      if (!Array.isArray(results)) {
        throw new Error('Error al obtener los pagos desde la base de datos');
      }
      const payments: PaymentMethod[] = results.map((row) => {
        return new PaymentMethod(row.id, row.name, row.status, row.pb_key_prod, row.pd_key_prod, row.pb_key_test, row.pd_key_testd);
      });
      return payments;
    } catch (error) {
      console.error('Error al obtener todos los pagos:', error);
      throw error;
    }
  }

  async createPayments(payment: PaymentMethod): Promise<PaymentMethod | null> {
    try {
      const { id, name, status, pb_key_prod, pd_key_prod, pb_key_test, pd_key_test } = payment;

      if (!name || !status ||  !pb_key_prod|| !pd_key_prod|| !pb_key_test|| !pd_key_test) {
        throw new Error('Faltan datos obligatorios para crear el pago.');
      }
      const sql = "INSERT INTO paymentMethod (name, status, pb_key_prod,  pd_key_prod, pb_key_test, pd_key_test) VALUES (?, ?, ?, ?, ?, ?)";
      const params: any[] = [name, status, pb_key_prod, pd_key_prod, pb_key_test, pd_key_test];
      const result: any = await query(sql, params);

      if (result.affectedRows > 0) {
        return new PaymentMethod(result.id, name, status, pb_key_prod, pd_key_prod, pb_key_test, pd_key_test);
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error al crear el pago:', error);
      throw error;
    }
  }

  async setInactivePayment(id: number, status: string): Promise<number | string | void> {
    try {
      const sql = "UPDATE paymentMethod SET status = ? WHERE id = ?";
      const params: any[] = ['inactive', id];
      const result: any = await query(sql, params);

      if (result.affectedRows > 0) {
        // Devolver la ID del pago inactivado
        return id;
      } else {
        return 'The payment could not be deactivated.';
      }
    } catch (error) {
      console.error('Error while deactivating the payment:', error);
      throw error;
    }
  }

  async setActivePayment(id: number, status: string): Promise<number | string | void> {
    try {
      const sql = "UPDATE paymentMethod SET status = ? WHERE id = ?";
      const params: any[] = ['active', id];
      const result: any = await query(sql, params);

      if (result.affectedRows > 0) {
        // Devolver la ID del pago activado
        return id;
      } else {
        return 'The payment could not be activated.';
      }
    } catch (error) {
      console.error('Error while activating the payment:', error);
      throw error;
    }
  }


}
