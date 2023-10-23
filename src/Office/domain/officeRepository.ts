import { Office } from './office';

export interface OfficeRepository {
    create(office: Office): Promise<void>;
    
}
