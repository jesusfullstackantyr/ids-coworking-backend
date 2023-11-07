import { PaymentRepository } from "../../domain/repositories/paymentRepository";
import { CustomerRequest } from "../../domain/entities/customer";
import { CardRequest } from "../../domain/entities/card";
import { query } from "../../../../database/mariaDb";
import { Payment } from "../../domain/entities/payments";
import { PaymentOpenpay } from "../services/openpay";
import moment from 'moment';


export class MariadbCardRepository implements PaymentRepository {

  async listAllPayments(): Promise<Payment[]> {
    try {
      const sql = `
        SELECT *
        FROM payment
      `;
      const params: any[] = [];
      const rows: any[] = await query(sql, params); // Utilizamos "rows" para obtener múltiples resultados
  
      if (rows && rows.length > 0) {
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
            row.id_user
          );
        });
  
        return payments; // Devolvemos un array con todos los pagos encontrados
      } else {
        return []; // En caso de que no se encuentren resultados, devolvemos un array vacío
      }
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
                UPDATE Payment
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
                UPDATE paymentMethod
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
        SELECT payment.status AS payment, card.status AS card,  paymentMethod.status AS paymentMethod,  contract.status AS contract
            FROM payment LEFT JOIN card ON payment.id = card.id_folio
                LEFT JOIN paymentMethod ON payment.id = paymentMethod.id
                    LEFT JOIN contract ON payment.id = contract.id
                        WHERE payment.id = ?
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
      phone: string,
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
      id_user: string,
      dataPay: any
  
    ): Promise<void | JSON> {
      //aqui se obtendra desde la base de datos las credenciales  
     
      try {
  
       
  
        if (dataPay.error_message == null) {
  
  
          let sqlcard = `
            INSERT INTO Card ( 
                headline, emitter_type, cvv, value_with_vat, concept, 
                phone, email, card_number, expiration_year, expiration_month, status 
            ) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
  
          const paramscard = [
            name,
            dataPay.card.brand,
            cvv,
            amount,
            description,
            phone,
            email,
            card_number,
            expiration_month,
            expiration_year,
            "process",
          ];
  
  
          const cardquery = await query(sqlcard, paramscard);
  
          let sql = `
          INSERT INTO Payment  (
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
          const paymentquery = await query(sql, params);
          console.log(paymentquery)
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