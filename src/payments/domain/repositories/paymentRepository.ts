import { Payment } from "../entities/payments";

export interface PaymentRepository {

    cancelPayment(paymentId: number, newStatus: string): Promise<Payment | null>;

    listAllPayments(): Promise<Payment[]>;

}