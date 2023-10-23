import { IsNotEmpty, IsString ,IsNumber,IsInt} from 'class-validator';
import { Office } from "../office";

export class ValidatorupdateStatus {

    @IsInt()
    @IsNotEmpty()
    public id: number;
    
    @IsNotEmpty()
    @IsString()
    public status: string;

    constructor(
        status: string,
        id: number
    ) {
        this.status = status;
        this.id = id;
    }
}
