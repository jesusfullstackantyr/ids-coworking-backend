import { IsNotEmpty, IsString } from 'class-validator';
import { Office } from "../office";

export class ValidatorupdateStatus {

    @IsNotEmpty
    @IsString
    public status: string;

    constructor(
        status: string
    ) {
        this.status = status;
    }
}
