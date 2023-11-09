
import { Office } from '../../domain/entities/office';
import { query } from '../../../../database/mariaDb';
import { OfficeRepository } from '../../domain/repositories/officeRepository';



export class MariaDBRepository implements OfficeRepository {

  async getOffice(id: number): Promise<Office | null> {
    const sql = "SELECT * FROM offices WHERE id = ?";

    try {   // Usar id de la oficina en lugar de id_public
      const result= await query(sql,[id]);

      if (result && result.length > 0) {
        // Mapea los resultados en objetos de oficina
        const officeList = result.map((data: any) => new Office(
          data.id,
          data.name,
          data.image_url,
          data.status,
          data.id_category
        ));

        return officeList;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error al obtener el libro:', error);
      return null;
    }
  }

  async create(office: Office): Promise<void> {
    const sql = `
      INSERT INTO offices (name, image_url, status, id_category)
      VALUES (?, ?, ?, ?);
    `;

    const values = [office.name, office.image_url, office.status, office.id_category];

    try {
      await query(sql, values);
    } catch (error) {
      console.error('Error al crear oficina:', error);
      throw new Error('Error al crear la oficina en la base de datos');
    }
  }

  async update(office: Office): Promise<Office | null> {
    const sql = `
        UPDATE offices
        SET name = ?, image_url = ?, status = ?, id_category = ?
        WHERE id = ?;
    `;

    const values = [office.name, office.image_url, office.status, office.id_category, office.id];

    try {
      await query(sql, values);
      return office; // Return the updated office
    } catch (error) {
      console.error('Error al Actualizar oficina:', error);
      throw new Error('Error al Actualizar la oficina en la base de datos');
    }
  }

  // agregar otros métodos para interactuar con la tabla de "offices",  
  // como getById, update, delete, etc.

  async updateStatus(id: number, newStatus: string): Promise<Office | null> {
    const result = await query(`UPDATE offices SET status = ? WHERE id = ?`, [newStatus, id]);
    if (result.affectedRows === 0) {
      return null;
    }
    const updatedOffice = await query(`SELECT * FROM offices WHERE id = ?`, [id]);
    const officeData = updatedOffice[0];
    return new Office(officeData.id, officeData.name, officeData.image_url, officeData.status, officeData.id_category);
  }

}
