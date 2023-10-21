import { Category } from "../domain/category";
import { CategoryRepository } from "../domain/categoryRepository";

export class DeleteCategoryUseCase{

    constructor(readonly categoryRepository: CategoryRepository){}

    async delete(id:number):Promise<string | null>{
        try {
            const deletes = await this.categoryRepository.deleteCategory(id);
            return deletes;
        } catch (error) {
            return null;
        }
    }
}