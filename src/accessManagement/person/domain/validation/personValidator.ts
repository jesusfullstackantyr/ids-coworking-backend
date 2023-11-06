import { IsString, IsEmail, IsNumber, IsNotEmpty, IsEnum } from 'class-validator';

export class personValidator {
    @IsString()
    @IsNotEmpty()
    public name: string;

    @IsString()
    @IsNotEmpty()
    public lastname: string;

    @IsEmail()
    @IsNotEmpty()
    public email: string;

    @IsNumber()
    public phone: number;

    @IsString()
    @IsNotEmpty()
    public occupation: string;

    @IsNumber()
    public id_address: number;

    @IsNumber()
    public id_user: number;

    @IsEnum(['active', 'inactive'])
    public status: string;

    constructor(
        name: string,
        lastname: string,
        email: string,
        phone: number,
        occupation: string,
        id_address: number,
        id_user: number,
        status: string
    ) {
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.phone = phone;
        this.occupation = occupation;
        this.id_address = id_address;
        this.id_user = id_user;
        this.status = status;
    }
}
