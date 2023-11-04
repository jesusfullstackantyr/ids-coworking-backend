export class Payment {
    constructor (
        readonly id : number,
        readonly amount : number,
        readonly payment_date : Date,
        readonly status : string,
        readonly token: string,
        readonly metaData: JSON,
        readonly id_contract: number,
        readonly id_payment_method: number,
        readonly id_card: number | null,
        readonly id_user: number,
    ) {}
}