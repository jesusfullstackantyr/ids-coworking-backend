import {PaypalRepository } from "../domain/repositories/paypalRepository";

export class CreatePaypalCase {
    constructor(readonly PaypalRepo: PaypalRepository){}
    async run(id:number){
        const paypal = await this.PaypalRepo.createPaypal(id);
        if(!paypal){
            throw new Error("ALGO SALIO MAL CON PAYPAL")
        }
        return paypal;
    }
}    