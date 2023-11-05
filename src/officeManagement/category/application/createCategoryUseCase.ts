<<<<<<<< HEAD:src/officeManagement/category/application/createCategoryUseCase.ts
import { Category } from "../domain/entities/category";
import { CategoryRepository } from "../domain/repositories/categoryRepository";
import { ValidationCreateCategory } from "../domain/validation/categoriesValidation";
import { validate } from "class-validator";

export class CreateCategoryUseCase {
    constructor(readonly categoryRepository: CategoryRepository) { }

    async create(
        name: string,
        price: number,
        capacity: number,
        space: string,
        status: string,
    ): Promise<Category | null> {


        let validationCategory = new ValidationCreateCategory(name, price, capacity, space, status);
        const validation = await validate(validationCategory);

        if (validation.length > 0) {
            throw new Error(JSON.stringify(validation));
        }

        try {
            const createCategory = await this.categoryRepository.createCategory(
                name,
                price,
                capacity,
                space,
                status
            );
            return createCategory;
        } catch (error) {
            return null;
        }
    }
}
========
import { Category } from "../domain/category";
import { CategoryRepository } from "../domain/categoryRepository";
import { ValidationCreateCategory } from "../domain/validation/categoriesValidation";
import { validate } from "class-validator";

export class CreateCategoryUseCase {
    constructor(readonly categoryRepository: CategoryRepository) { }

    async create(
        name: string,
        price: number,
        capacity: number,
        space: string,
        status: string,
    ): Promise<Category | null> {


        let validationCategory = new ValidationCreateCategory(name, price, capacity, space, status);
        const validation = await validate(validationCategory);

        if (validation.length > 0) {
            throw new Error(JSON.stringify(validation));
        }

        try {
            const createCategory = await this.categoryRepository.createCategory(
                name,
                price,
                capacity,
                space,
                status
            );
            return createCategory;
        } catch (error) {
            return null;
        }
    }
}
>>>>>>>> origin/Miller:src/Category/application/createCategoryUseCase.ts
