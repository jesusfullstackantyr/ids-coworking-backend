import Openpay from 'openpay';
import { Card, CardRequest } from '../../domain/entities/card';
import { Customer, CustomerRequest } from '../../domain/entities/customer';




export async function PaymentOpenpay(
    MERCHANT_ID:string,
    PRIVATE_API_KEY:string,
    isProductionMode:boolean,
    customerRequest:CustomerRequest,
    cardRequest:CardRequest,
    method: string,
    amount: number,
    description: string,
    device_session_id: string
    ) {

    const openpay = new Openpay(MERCHANT_ID, PRIVATE_API_KEY, isProductionMode);


    try {
        const customer: Customer = await new Promise((resolve, reject) => {
            openpay.customers.create(customerRequest, (error, response) => {
              if (error) reject(error);
              else resolve(response);
            });
          });
    
    
          console.log('Cliente creado exitosamente:', customer);
    
          // Crear tarjeta/token
          const card : Card = await new Promise((resolve, reject) => {
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
      console.error('Error processing payment:', error);
      throw error; 
    }
}