import { Category } from "../domain/category";
import { CategoryRepository } from "../domain/categoryRepository";
import { validate } from "class-validator";
import { ValidatorId } from "../domain/validation/categoriesValidation";  

export class DeleteCategoryUseCase{

    constructor(readonly categoryRepository: CategoryRepository){}

    async delete(id:number):Promise<string | null>{
        

        let post = new ValidatorId(id)
        const validation = await validate(post)
        console.log(validation.length)
        if (validation.length > 0) {
            throw new Error(JSON.stringify(validation));
        }

        try {
            const deletes = await this.categoryRepository.deleteCategory(id);
            return deletes;
        } catch (error) {
            return null;
        }
    }
}