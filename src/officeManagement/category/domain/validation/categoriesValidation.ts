import { IsString, IsUUID, Length, IsBoolean, IsNotEmpty, ValidateIf, IsIn, IsOptional, IsEmail, IsNumber } from 'class-validator';


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

export class ValidationUpdateCategory {

    @IsNotEmpty()
    @IsNumber()
    public id: number;

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
        id: number,
        name: string,
        price: number,
        capacity: number,
        space: string,
        status: string,
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.capacity = capacity;
        this.space = space;
        this.status = status;
    }
}

export class ValidatorId {
    @IsNotEmpty()
    @IsNumber()
    public id: number;
    constructor(id: number) {
        this.id = id
    }
}