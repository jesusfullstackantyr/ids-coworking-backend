import { query } from "../../database/mariaDb";
import { Category } from "../domain/category";
import { CategoryRepository } from "../domain/categoryRepository";

export class MariaDBRepository implements CategoryRepository {

    async deleteCategory(id: number): Promise<string | null> {
        try {
          // Verifica si la categoría existe y no está marcada como eliminada
          const checkSql = "SELECT * FROM categories WHERE id = ? AND is_deleted = 0";
          const [existingCategory]: any = await query(checkSql, [id]);
      
          if (!Array.isArray(existingCategory) || existingCategory.length === 0) {
            return null; // La categoría no existe o ya ha sido eliminada.
          }
      
          // Marca la categoría como eliminada
          const sql = "UPDATE categories SET is_deleted = 1 WHERE id = ?";
          await query(sql, [id]);
      
          // También actualiza las oficinas relacionadas
          const updateOfficesSql = "UPDATE offices SET is_deleted = 1 WHERE id_category = ?";
          await query(updateOfficesSql, [id]);
      
          return `Category successfully marked as deleted.`;
        } catch (error) {
          console.error('Error al marcar la categoría como eliminada:', error);
          return null;
        }
      }


    

}