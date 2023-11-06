import { Payment } from "../entities/payments";

export interface PaymentRepository {


    cancelPayment(paymentId: number, newStatus: string): Promise<Payment | null>;

    listAllPayments(): Promise<Payment[]>;

    ProcessPayment(
        name:String,
        email:String,
        phone:string,
        card_number:String,
        cvv:String,
        expiration_month:String,
        expiration_year:String,
        method: String,
        amount: number,
        description: String,
        device_session_id:String,
        id_contract: number,
        id_payment_method: string,
        id_card: string,
        id_user: string,
        dataPay: any
    ):Promise<JSON | void | Error>
    
}