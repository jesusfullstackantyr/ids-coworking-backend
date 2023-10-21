import { Office } from "../domain/office";
import { OfficeRepository } from "../domain/officeRepository";


export class GetOfficeUseCase{
    constructor( readonly officeRepository: OfficeRepository){}

    async get(id:number):Promise<Office | null>{
        try {
            const get = await this.officeRepository.getOffice(id);
            return get;
            
        } catch (error) {
            return null;
        }
    }
}