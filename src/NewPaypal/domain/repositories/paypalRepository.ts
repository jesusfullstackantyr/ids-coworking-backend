import { Payment } from "../entities/payments";

export interface PaypalRepository{
    createPaypal(id:number): Promise<any|null>
    getPaypal(token:string):Promise<any|null>
    createPayment(payment:PaymentData): Promise<Payment|null>
}

export interface PaymentData{
    id : number,
    amount : number,
    payment_date : Date,
    status : string,
    token: string,
    metaData: JSON,
    id_contract: number,
    id_payment_method: number,
    id_card: number | null,
    id_user: number,
}