import { Category } from "./category";

export interface CategoryRepository {
    createCategory(
        name: string,
        price: number,
        capacity: number,
        space: string,
        status: string,
    ):Promise<Category | null>;

    deleteCategory(id: number):Promise<string | null>;
    
}