export interface PayableInterface {
    pay(transactionData:object):Promise<any|null>;
}