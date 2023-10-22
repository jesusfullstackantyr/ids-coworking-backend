import { PaymentRepository } from "../../payments/domain/repositories/paymentRepository";
import Openpay from 'openpay';
import { CardRepository } from "../domain/repositories/cardRepository";
import { Customer } from "../domain/entities/customer";
import { Card } from "../domain/entities/card";
import { strict } from "assert";


export class MariadbCardRepository implements CardRepository {


  async ProcessPayment(
    name: String,
    email: String,
    card_number: String,
    cvv: String,
    expiration_month: String,
    expiration_year: String,
    method: string,
    amount: number,
    description: string,
    device_session_id: String
  ): Promise<void | JSON> {
    const MERCHANT_ID = 'm59hfwafesvnn4ctddj7';
    const PRIVATE_API_KEY = 'sk_01d43bdbe6fb42d4be7bea2657ad3d5c';
    const isProductionMode = false; // cambia a 'true' en un entorno de producción
    console.log(name, email, card_number, cvv, expiration_month, method, amount, description, device_session_id, expiration_year)
    // Inicializa la instancia de Openpay
    const openpay = new Openpay(MERCHANT_ID, PRIVATE_API_KEY, isProductionMode);

    // Información del cliente
    const customerRequest = {
      name: name,
      email: email,
      requires_account: false
    };

    // Información de la tarjeta
    const cardRequest = {
      holder_name: name, // Asumiendo que el 'name' es el nombre del titular de la tarjeta
      card_number: card_number,
      cvv2: cvv,
      expiration_month: expiration_month,
      expiration_year: expiration_year
    };

    // Intenta crear el cliente, la tarjeta y realizar el cargo de manera secuencial
    try {
      // Crear cliente
      // Crear cliente
      const customer: Customer = await new Promise((resolve, reject) => {
        openpay.customers.create(customerRequest, (error, response) => {
          if (error) reject(error);
          else resolve(response);
        });
      });


      console.log('Cliente creado exitosamente:', customer);

      // Crear tarjeta/token
      const card : Card = await new Promise((resolve, reject) => {
        console.log(customer.id, cardRequest.card_number, cardRequest.cvv2, cardRequest.expiration_month, cardRequest.expiration_year, cardRequest.holder_name + "---------------")
        openpay.customers.cards.create(customer.id, cardRequest, (error, response) => {
          
          if (error) {
            console.error("Error al crear la tarjeta en OpenPay:", error);
            const customError = new Error("-------------error pa----------");
            reject(customError); // Rechaza la promesa con el error personalizado
          } else {
            resolve(response);
          
          }
        });

      });

      console.log('Tarjeta creada exitosamente:', card);

      // Preparar y realizar el cargo
      const chargeRequest = {
        method: method,
        source_id: card.id, // usar el ID de la tarjeta como 'source_id'
        amount: amount,
        description: description,
        device_session_id: device_session_id
        
      };
      console.log(chargeRequest.device_session_id)
      // Realizar el cargo
      const charge : void | JSON = await new Promise((resolve, reject) => {
        openpay.customers.charges.create(customer.id, chargeRequest, (error, response) => {
          if (error) {
            console.error("Error al crear la tarjeta en OpenPay:", error);
            const customError = new Error("-------------error pa----------");
            reject(customError); // Rechaza la promesa con el error personalizado
          } else {
            resolve(response);
          }
        });
      });

      console.log('Cargo realizado exitosamente:', charge);
      return charge; // Retorna la información del cargo realizado

    } catch (error) {
      // Manejo de errores
      console.error('Error processing payment:', error);
      throw error; // Puedes optar por lanzar el error o manejarlo de una manera específica
    }



  }




}