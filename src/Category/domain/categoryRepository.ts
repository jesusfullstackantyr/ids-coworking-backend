import { Category } from "./category";

export interface CategoryRepository{

    deleteCategory(id: number):Promise<string | null>;
    
}