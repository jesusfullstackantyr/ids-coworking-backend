import { IsString, IsEmail, IsNumber, IsNotEmpty, IsOptional, Min, Matches, MinLength} from 'class-validator';

const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]|\\:;<>,.?/~]).{8,}$/;


export class User {
    

    @IsEmail()
    @IsString()
    @IsNotEmpty()
    public email: string;

    @IsString()
    @IsNotEmpty()
    @Matches(strongPasswordRegex, { message: 'La contraseña debe ser más fuerte: debe tener al menos 8 caracteres, una letra minúscula, una letra mayúscula, un número y un carácter especial.' })
    @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres.' })
    public password: string;

    @IsString()
    @IsNotEmpty()
    public verified: Date;


    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    @IsOptional() // Opcional al actualizar
    public idRole: number;
    

    constructor(email: string, password: string, verified: Date, idRole: number) {
        this.email = email;
        this.password = password;
        this.verified = verified;
        this.idRole = idRole;
    }
}
