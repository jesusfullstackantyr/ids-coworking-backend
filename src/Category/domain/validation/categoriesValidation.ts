import { IsString, IsUUID, Length, IsBoolean, IsNotEmpty, ValidateIf, IsIn, IsOptional,IsEmail,IsNumber} from 'class-validator';
export class ValidatorId {
    @IsNotEmpty()
    @IsNumber()
    public id: number;
    constructor(id:number) {
        this.id = id
    }
}