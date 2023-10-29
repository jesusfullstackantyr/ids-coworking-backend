import { Office } from '../entities/office';

export interface OfficeRepository {
    create(office: Office): Promise<void>;
    update(office: Office): Promise<Office | null>;
    
    getOffice(id:number):Promise<Office | null>

    updateStatus(id: number, newStatus: string): Promise<Office | null>  //listo
}

