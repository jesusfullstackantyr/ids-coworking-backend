import {PaypalRepository } from "../domain/repositories/paypalRepository";

export class CreatePaypalCase {
    constructor(readonly PaypalRepo: PaypalRepository){}
    async run(){
        const paypal = await this.PaypalRepo.createPaypal();
        if(!paypal){
            throw new Error("ALGO SALIO MAL CON PAYPAL")
        }
        return paypal;
    }
}    