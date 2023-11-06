import { IsNotEmpty } from 'class-validator';

export class User {
    @IsNotEmpty()
    public id: number;

    @IsNotEmpty()
    public email: string;

    @IsNotEmpty()
    public password: string;

    @IsNotEmpty()
    public verified: Date;

    @IsNotEmpty()
    public idRole: number;
    

    constructor(id: number,email: string, password: string, verified: Date, idRole: number) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.verified = verified;
        this.idRole = idRole;
    }
}
