import { Payment } from "../entities/payments";

export interface PaymentRepository {
    
    listAllPayments(): Promise<Payment[]>;

}