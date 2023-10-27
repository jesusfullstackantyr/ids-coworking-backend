import { PayableInterface } from "./PayableInterface";

export class Paypal implements PayableInterface {
    setCredentials(publicKey: String, privateKey: String, isLive: Boolean) {
        throw new Error("Method not implemented.");
    }
    pay(transactionData:object): Promise<any> {
        throw new Error("Method not implemented.");
    }
}