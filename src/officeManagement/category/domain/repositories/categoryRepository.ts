import { Category } from "../entities/category";

export interface CategoryRepository {
    createCategory(
        name: string,
        price: number,
        capacity: number,
        space: string,
        status: string,
    ): Promise<Category | null>;

    updateCategory(
        id: number,
        name: string,
        price: number,
        capacity: number,
        space: string,
        status: string,
    ): Promise<Category | null>;

    deleteCategory(id: number): Promise<string | null>;

    getCategory(id: number):Promise<Category | null>;
    
}