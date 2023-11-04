import { PaymentMethod } from "../entities/paymentsMethod";

export interface PaymentRepository {
    
    setInactivePayment(id: number, status: string): Promise<number | string | void >;
    setActivePayment(id: number, status: string): Promise<number | string | void >;


}