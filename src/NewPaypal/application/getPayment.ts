import {PaypalRepository  } from "../domain/repositories/paypalRepository";

export class GetPaypalCase {
    constructor(readonly PaypalRepo: PaypalRepository){}
    async run(token:string){
        const paypal = await this.PaypalRepo.getPaypal(token);
        if(!paypal){
            throw new Error("ALGO SALIO MAL CON PAYPAL")
        }
        return paypal;
    }
}    