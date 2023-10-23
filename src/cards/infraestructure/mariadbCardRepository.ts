import { PaymentRepository } from "../../payments/domain/repositories/paymentRepository";
import Openpay from 'openpay';
import { CardRepository } from "../domain/repositories/cardRepository";
import { Customer, CustomerRequest } from "../domain/entities/customer";
import { Card, CardRequest } from "../domain/entities/card";
import { strict } from "assert";
import { PaymentOpenpay } from "./services/openpay";


export class MariadbCardRepository implements CardRepository {


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
    device_session_id: string
  ): Promise<void | JSON> {
    //aqui se obtendra desde la base de datos las credenciales  
    const MERCHANT_ID = 'm59hfwafesvnn4ctddj7';
    const PRIVATE_API_KEY = 'sk_01d43bdbe6fb42d4be7bea2657ad3d5c';
    const isProductionMode = false;

    const customerRequest:CustomerRequest = {
      name: name,
      email: email,
      requires_account: false
    };

    const cardRequest:CardRequest = {
      holder_name: name, 
      card_number: card_number,
      cvv2: cvv,
      expiration_month: expiration_month,
      expiration_year: expiration_year
    };

    try {

      return await PaymentOpenpay(
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
      

        
    } catch (error) {
      console.error('Error processing payment:', error);
      throw error; 
    }



  }




}