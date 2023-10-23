export class Payment {
    constructor (
        readonly id : number,
        readonly amount : number,
        readonly payment_date : Date,
        readonly status : string
    ) {}
}
