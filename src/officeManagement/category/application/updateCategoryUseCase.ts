import { Category } from "../domain/entities/category";
import { CategoryRepository } from "../domain/repositories/categoryRepository";
import { ValidationUpdateCategory } from "../domain/validation/categoriesValidation";
import { validate } from "class-validator";

export class UpdateCategoryUseCase {
    constructor(readonly categoryRepository: CategoryRepository) { }

    async update(
        id: number,
        name: string,
        price: number,
        capacity: number,
        space: string,
        status: string,
    ): Promise<Category | null> {

        let validationUpdate = new ValidationUpdateCategory(id, name, price, capacity, space, status);
        const validation = await validate(validationUpdate);

        if (validation.length > 0) {
            throw new Error(JSON.stringify(validation));
        }

        try {
            const updateCategory = await this.categoryRepository.updateCategory(
                id,
                name,
                price,
                capacity,
                space,
                status
            );
            return updateCategory;
        } catch (error) {
            return null;
        }
    }
}