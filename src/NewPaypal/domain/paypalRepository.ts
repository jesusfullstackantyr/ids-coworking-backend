import { Paypal } from "./paypal";

export interface PaypalRepository{
    createPaypal(): Promise<any|null>
    getPaypal(token:string):Promise<any|null>
}
