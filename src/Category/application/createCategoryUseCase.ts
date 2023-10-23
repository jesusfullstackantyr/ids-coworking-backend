import { Category } from "../domain/category";
import { CategoryRepository } from "../domain/categoryRepository";

export class CreateCategoryUseCase {
    constructor(readonly categoryRepository: CategoryRepository){}

    async create(
        name: string,
        price: number,
        capacity: number,
        space: string,
        status: string,
    ): Promise<Category | null> {
        try {

            if (!name || !price || !capacity || !space || !status){
                return null;
            }

            const createCategory = await this.categoryRepository.createCategory(
                name,
                price,
                capacity,
                space,
                status
            );

            if (createCategory === null){
                return null;
            }

            return createCategory;
        } catch (error) {
            return null;
        }
    }
}
