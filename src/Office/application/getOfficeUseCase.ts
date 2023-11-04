import { Office } from "../domain/office";
import { OfficeRepository } from "../domain/officeRepository";
import { validate } from "class-validator";
import { ValidatorId } from "../domain/validation/officesValidation";


export class GetOfficeUseCase{
    constructor( readonly officeRepository: OfficeRepository){}


    async get(id:number):Promise<Office | null>{

        let post = new ValidatorId(id)
        const validation = await validate(post)
        console.log(validation.length)
        if (validation.length > 0) {
            throw new Error(JSON.stringify(validation));
        }
        
        try {
            const get = await this.officeRepository.getOffice(id);
            return get;
            
        } catch (error) {
            return null
        
        }
    }
}