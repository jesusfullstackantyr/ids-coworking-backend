import { Office } from './office';

export interface OfficeRepository {
    create(office: Office): Promise<void>;
    // Otros métodos según sean necesarios, como getById, update, delete, etc.
}
