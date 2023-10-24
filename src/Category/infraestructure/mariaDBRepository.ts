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
}
