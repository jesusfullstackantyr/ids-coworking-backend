import { PaymentRepository } from "../../payments/domain/repositories/paymentRepository";
import moment from 'moment';
import { CustomerRequest } from "../domain/entities/customer";
import { CardRequest } from "../domain/entities/card";
import { PaymentOpenpay } from "./services/openpay";
import { query } from "../../database/mariaDb";




export class MariadbCardRepository implements PaymentRepository {


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