import { Office } from '../domain/office';
import { query } from '../../database/mariaDb';
import { OfficeRepository } from '../domain/officeRepository'; 

export class MariaDBRepository implements OfficeRepository {

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

  // agregar otros métodos para interactuar con la tabla de "offices",  
  // como getById, update, delete, etc.

}
