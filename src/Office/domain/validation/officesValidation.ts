import { IsNotEmpty, IsString ,IsNumber,IsInt, IsIn} from 'class-validator';

export class ValidatorupdateStatus {

    @IsInt()
    @IsNotEmpty()
    public id: number;
    
    @IsNotEmpty()
    @IsString()
    @IsIn(['activo', 'inactivo', 'mantenimiento'])
    public status: string;

    constructor(
        id: number,
        status: string,
    ) {
        this.id = id;
        this.status = status;
    }
}
