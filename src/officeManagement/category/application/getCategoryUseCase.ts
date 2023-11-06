import { Category } from "../domain/entities/category";
import { CategoryRepository } from "../domain/repositories/categoryRepository";
import { validate } from "class-validator";
import { ValidatorId } from "../domain/validation/categoriesValidation";  

export class GetCategoryUseCase{
    constructor( readonly categoryRepository: CategoryRepository){}


    async get(id: number): Promise<Category| null>{

        let post = new ValidatorId(id)
        const validation = await validate(post)
        console.log(validation.length)
        if (validation.length > 0) {
            throw new Error(JSON.stringify(validation));
        }

        try {
            const category = await this.categoryRepository.getCategory(id);
            return category;

        } catch (error) {
            return null;
        }
    }
}