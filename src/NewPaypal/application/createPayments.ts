import {PaypalRepository,PaymentData  } from "../domain/repositories/paypalRepository";

export class CreatePaymentCase {
    constructor(readonly PaypalRepo: PaypalRepository){}
    async run(payments:PaymentData){
        const payment = await this.PaypalRepo.createPayment(payments);
        if(!payment){
            throw new Error("ALGO SALIO MAL CON PAYPAL")
        }
        return payment;
    }
}  