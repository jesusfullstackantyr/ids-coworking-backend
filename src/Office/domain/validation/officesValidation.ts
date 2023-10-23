import { IsNotEmpty, IsString ,IsNumber,IsInt} from 'class-validator';

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
