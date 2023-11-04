export class Card {
    constructor (
        readonly id_folio : number,
        readonly headline : string,
        readonly emitter_type : string,
        readonly cvv : number,
        readonly value_with_vat : number,
        readonly concept : string,
        readonly phone : number,
        readonly email : string,
        readonly card_number : number,
        readonly expiration_year : string,
        readonly expiration_month : string,
        readonly status : string
    ) {}
}