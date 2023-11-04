import { IsNotEmpty, IsNumber } from 'class-validator'

export class ValidationId {
    @IsNotEmpty()
    @IsNumber()
    public id: number;

    constructor(id: number) {
        this.id = id;
    }
}