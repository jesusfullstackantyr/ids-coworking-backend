import { Office } from "../domain/entities/office";
import { OfficeRepository } from "../domain/repositories/officeRepository";


export class  UpdateStatus{
    constructor( readonly officeRepository: OfficeRepository){}

    async run(id:number,status:string):Promise<Office | null>{
        try {
            const get = await this.officeRepository.updateStatus(id,status);
            return get;
            
        } catch (error) {
            return null;
        }
    }
}