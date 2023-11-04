import { IsInt ,IsString, IsUUID, Length, IsBoolean, IsNotEmpty, ValidateIf, IsIn, IsOptional,IsEmail,IsNumber} from 'class-validator';
export class ValidatorId {
    @IsNotEmpty()
    @IsNumber()
    public id: number;
    constructor(id:number) {
        this.id = id
    }
}

export class OfficeValidation {
    @IsInt({ message: 'El ID debe ser un número entero' })
    public id: number;

    @IsNotEmpty({ message: 'El nombre es obligatorio' })
    @IsString({ message: 'El nombre debe ser una cadena de caracteres' })
    @Length(1, 255, { message: 'El nombre debe tener entre 1 y 255 caracteres' })
    public name: string;

    @IsOptional()
    @IsString({ message: 'La URL de la imagen debe ser una cadena de caracteres' })
    @Length(1, 255, { message: 'La URL de la imagen debe tener entre 1 y 255 caracteres' })
    public image_url: string;

    @IsNotEmpty({ message: 'El estado es obligatorio' })
    @IsString({ message: 'El estado debe ser una cadena de caracteres' })
    @Length(1, 50, { message: 'El estado debe tener entre 1 y 50 caracteres' })
    public status: string;

    @IsInt({ message: 'La categoría de ID debe ser un número entero' })
    public id_category: number;

    constructor(id: number, name: string, image_url: string, status: string, id_category: number) {
        this.id = id;
        this.name = name;
        this.image_url = image_url;
        this.status = status;
        this.id_category = id_category;
    }
}

export class ValidatorupdateStatus {

    @IsInt()
    @IsNotEmpty()
    public id: number;
    
    @IsNotEmpty()
    @IsString()
    public status: string;

    constructor(
        id: number,
        status: string,
    ) {
        this.id = id;
        this.status = status;
    }
}
