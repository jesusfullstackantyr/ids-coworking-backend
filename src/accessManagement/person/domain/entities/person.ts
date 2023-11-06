import { IsString, IsEmail, IsNumber, IsNotEmpty, IsEnum, IsOptional, Min} from 'class-validator';

export class Person {
    @IsNotEmpty()
    @IsString()
    @IsNotEmpty()
    public name: string;

    @IsNotEmpty()
    @IsString()
    @IsNotEmpty()
    public lastname: string;

    @IsNotEmpty()
    @IsEmail({ require_tld: false })
    //@IsOptional() // Opcional al actualizar
    public email: string;

    @IsNotEmpty()
    @IsString({ groups: ['update'] })
   //@IsOptional({ groups: ['update'] }) // Opcional al actualizar
    public phone: string;

    @IsNotEmpty()
    @IsString()
    //@IsOptional({ groups: ['update'] }) // Opcional al actualizar
    public occupation: string;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    //@IsOptional({ groups: ['update'] }) // Opcional al actualizar
    public id_address: number;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
   // @IsOptional({ groups: ['update'] }) // Opcional al actualizar
    public id_user: number;

    @IsNotEmpty()
    @IsString()
    @IsEnum(['in process', 'active', 'inactive'])
    //@IsOptional({ groups: ['update'] }) // Opcional al actualizar
    public status: string;

    constructor(
        name: string,
        lastname: string,
        email: string,
        phone: string,
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