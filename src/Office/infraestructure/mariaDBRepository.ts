import { query } from "../../database/mariaDb";
import { Office } from "../domain/office";
import { OfficeRepository } from "../domain/officeRepository";

export class MariaDBRepository implements OfficeRepository {

    async updateStatus(id: number, newStatus: string): Promise<Office | null>  {
        const result = await query(`UPDATE offices SET status = ? WHERE id = ?`, [newStatus, id]);
        if (result.affectedRows === 0) {
            return null;
        }
        const updatedOffice = await query(`SELECT * FROM offices WHERE id = ?`, [id]);
        const officeData = updatedOffice[0];
        return new Office(officeData.id, officeData.name, officeData.image_url, officeData.status, officeData.id_category);
    }
}
