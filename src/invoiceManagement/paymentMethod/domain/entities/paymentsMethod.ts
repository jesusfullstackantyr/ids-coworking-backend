import { IsNotEmpty, IsOptional } from 'class-validator';
export class PaymentMethod {
    @IsOptional()
    public id:number;

    @IsNotEmpty()
    public name:string;

    @IsNotEmpty()
    public status:string;

    @IsNotEmpty()
    public pb_key_prod:string;

    @IsNotEmpty()
    public pd_key_prod:string;

    @IsNotEmpty()
    public pb_key_test:string;

    @IsNotEmpty()
    public pd_key_test:string;



    constructor (id:number, name:string,status:string,pb_key_prod:string, pd_key_prod:string, pb_key_test:string, pd_key_test:string ){
        this.id = id;
        this.name = name;
        this.status = status;
        this.pb_key_prod = pb_key_prod;
        this.pd_key_prod = pd_key_prod;
        this.pb_key_test = pb_key_test;
        this.pd_key_test = pd_key_test;
    }
}