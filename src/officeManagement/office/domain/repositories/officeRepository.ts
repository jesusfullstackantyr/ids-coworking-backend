import { Office } from '../entities/office';

export interface OfficeRepository {
    create(office: Office): Promise<void>;
    
    getOffice(id:number):Promise<Office | null>

    updateStatus(id: number, newStatus: string): Promise<Office | null>  //listo
}

