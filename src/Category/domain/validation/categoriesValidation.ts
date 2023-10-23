import { IsNumber, IsNotEmpty, IsString, IsIn } from 'class-validator';


export class ValidationCreateCategory {

    @IsNotEmpty()
    @IsString()
    public name: string;

    @IsNotEmpty()
    @IsNumber()
    public price: number;

    @IsNotEmpty()
    @IsNumber()
    public capacity: number;

    @IsNotEmpty()
    @IsString()
    public space: string;

    @IsNotEmpty()
    @IsIn(["Activo", "Inactivo", "Mantenimiento"])
    public status: string;

    constructor(
        name: string,
        price: number,
        capacity: number,
        space: string,
        status: string,
    ) {
        this.name = name;
        this.price = price;
        this.capacity = capacity;
        this.space = space;
        this.status = status;
    }

}