import { PayableInterface } from "./payableInterface";

export class Paypal implements PayableInterface {
    setCredentials(publicKey: String, privateKey: String, isLive: Boolean) {
        throw new Error("Method not implemented.");
    }
    pay(transactionData:object): Promise<any> {
        throw new Error("Method not implemented.");
    }
}