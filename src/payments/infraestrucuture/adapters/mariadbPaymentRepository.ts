import { PaymentRepository } from "../../domain/repositories/paymentRepository";
import { CustomerRequest } from "../../domain/entities/customer";
import { CardRequest } from "../../domain/entities/card";
import { query } from "../../../database/mariaDb";
import { Payment } from "../../domain/entities/payments";
import { PaymentOpenpay } from "../services/openpay";
import moment from 'moment';




export class MariadbCardRepository implements PaymentRepository {
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
          row.token,
          row.status,
          row.metaData,
          row.id_contract,
          row.id_payment_method,
          row.id_card,
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


  async ProcessPayment(
    name: string,
    email: string,
    card_number: string,
    cvv: string,
    expiration_month: string,
    expiration_year: string,
    method: string,
    amount: number,
    description: string,
    device_session_id: string,
    id_contract: number,
    id_payment_method: string,
    id_card: string,
    id_user: string
  ): Promise<void | JSON> {
    //aqui se obtendra desde la base de datos las credenciales  
    const MERCHANT_ID = 'm59hfwafesvnn4ctddj7';
    const PRIVATE_API_KEY = 'sk_01d43bdbe6fb42d4be7bea2657ad3d5c';
    const isProductionMode = false;

    const customerRequest: CustomerRequest = {
      name: name,
      email: email,
      requires_account: false
    };

    const cardRequest: CardRequest = {
      holder_name: name,
      card_number: card_number,
      cvv2: cvv,
      expiration_month: expiration_month,
      expiration_year: expiration_year
    };

    try {

      const dataPay: any = await PaymentOpenpay(
        MERCHANT_ID,
        PRIVATE_API_KEY,
        isProductionMode,
        customerRequest,
        cardRequest,
        method,
        amount,
        description,
        device_session_id
      )
      console.log(dataPay.card.type)

      if (dataPay.error_message == null) {
        let sql = `
        INSERT INTO payments (
          amount, payment_date, status, token, metaData, 
          id_contract, id_payment_method, id_card, id_user
        ) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;


        const formattedDate = moment(dataPay.creation_date).format('YYYY-MM-DD HH:mm:ss');

        const params = [
          dataPay.amount,
          formattedDate, // Usar la fecha/hora formateada aquí.
          dataPay.status,
          dataPay.id,
          JSON.stringify(dataPay), // Asegúrate de que 'metaData' sea una cadena si es un campo de texto.
          id_contract,
          id_payment_method,
          id_card,
          id_user,
        ];

        // Suponiendo que tienes una función 'query' disponible para ejecutar consultas SQL.
        const dataquery = await query(sql, params);
        console.log(dataquery)
      } else {
        console.log(dataPay.error_message)
      }
      return dataPay

    } catch (error) {
      console.error('Error processing payment:', error);
      throw error;
    }



  }




}