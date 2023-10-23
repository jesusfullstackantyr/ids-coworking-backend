import { IsNotEmpty } from 'class-validator';
export class Payment {
    @IsNotEmpty()
    public id:number;

    @IsNotEmpty()
    public amount:number;

    @IsNotEmpty()
    public payment_date:string;

    @IsNotEmpty()
    public status:string;

    @IsNotEmpty()
    public id_user:number;

    @IsNotEmpty()
    public id_rental:number;



    constructor (id:number, amount:number, payment_date:string,status:string,id_user:number, id_rental:number ){
        this.id = id;
        this.amount = amount;
        this.payment_date = payment_date;
        this.status = status;
        this.id_user = id_user;
        this.id_rental = id_rental;
    }
}