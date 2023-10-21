import { query } from "../../database/mariaDb";
import { Office } from "../domain/office";
import { OfficeRepository } from "../domain/officeRepository";

export class MariaDBRepository implements OfficeRepository {

    async getOffice(id: number): Promise<Office | null> {
        try {
            const sql = "SELECT * FROM offices WHERE id = ?";
        const params: any[] = [id]; // Usar id de la oficina en lugar de id_public

        const [result]: any = await query(sql, params);

        if (result && result.length > 0) {
            // Mapea los resultados en objetos de comentario
            const Office = result.map((data: any) => new Office(
                data.id,
                data.name,
                data.image_url,
                data.status,
                data.id_category
            ));

            return Office;
        } else {
            return null;
        }
        } catch (error) {
            return null;
        }
    }
    

}