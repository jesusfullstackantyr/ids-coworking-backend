import { query } from "../../../database/mariaDb";
import { PaymentMethod } from "../../domain/entities/paymentsMethod";
import { PaymentRepository } from "../../domain/repositories/paymentMethodRepository";

export class PaymentMethodMariaDBAdapterRepository implements PaymentRepository {
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
