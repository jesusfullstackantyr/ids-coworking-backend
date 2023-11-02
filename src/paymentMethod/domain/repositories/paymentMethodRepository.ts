import { PaymentMethod } from "../entities/paymentsMethod";

export interface PaymentRepository {
    createPayments(credentials:PaymentMethod):Promise<PaymentMethod|null>;
    getAllPayments(): Promise<PaymentMethod[]>;
    updatePayment(id: number, updatedPaymentData: PaymentMethod): Promise<PaymentMethod | null>;
    deletePayment(id: number): Promise<boolean>;
    getPaymentById(id:number): Promise<PaymentMethod | null>
}
