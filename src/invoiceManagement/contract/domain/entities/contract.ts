export class Contract {

    constructor(
        readonly id: number,
        readonly amount: number,
        readonly start_date: Date,
        readonly expiration_date: Date,
        readonly status: string,
        readonly iduser: number,
        readonly idoffice: number,
        
    ){}

}