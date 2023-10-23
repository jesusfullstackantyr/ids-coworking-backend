import { Office } from "./office";

export interface OfficeRepository{
    
    updateStatus(id: number, newStatus: string): Promise<Office | null>  //listo
//
}