import { query } from "../../database/mariaDb";
import { CategoryRepository } from "../domain/categoryRepository";
import { Category } from "../domain/category";

export class MariaDBRepository implements CategoryRepository {
    async createCategory(
        name: string, 
        price: number, 
        capacity: number, 
        space: string, 
        status: string
    ): Promise<Category | null> {
        try {
            const sql = "INSERT INTO CATEGORIES (name, price, capacity, space, status) VALUES (?,?,?,?,?)";
            const params: any[] = [name, price, capacity, space, status]; 
            const result = await query(sql, params);

            // Ensure that the result contains the necessary data for creating a new Category object
            if (result && result.insertId) {
                const createdCategory = new Category(result.insertId, name, price, capacity, space, status);
                return createdCategory;
            } else {
                throw new Error("Failed to create the category. No valid result obtained from the database.");
            }
        } catch (error) {
            console.error("Error: ", error);
            throw new Error("Failed to create the category. Please try again later.");
        }    
    }
    
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
   


    


