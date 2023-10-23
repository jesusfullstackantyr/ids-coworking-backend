import { Payment } from "../entities/payments";

export interface PaymentRepository {
    createPayments(credentials:Payment):Promise<Payment|null>;
    getAllPayments(): Promise<Payment[]>;
    updatePayment(id: number, updatedPaymentData: Payment): Promise<Payment | null>;
    deletePayment(id: number): Promise<boolean>;
}