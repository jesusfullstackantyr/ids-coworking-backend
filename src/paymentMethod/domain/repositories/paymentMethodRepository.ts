import { PaymentMethod } from "../entities/paymentsMethod";

export interface PaymentRepository {
    createPayments(credentials:PaymentMethod):Promise<PaymentMethod|null>;
    getAllPayments(): Promise<PaymentMethod[]>;
    updatePayment(id: number, updatedPaymentData: PaymentMethod): Promise<PaymentMethod | null>;
    deletePayment(id: number): Promise<boolean>;
    
    setInactivePayment(id: number, status: string): Promise<number | string | void >;
    setActivePayment(id: number, status: string): Promise<number | string | void >;


}