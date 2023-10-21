import { Office } from "./office";

export interface OfficeRepository{
    
    getOffice(id:number):Promise<Office | null>
}