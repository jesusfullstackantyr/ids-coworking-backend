import { MariaDBRepository } from "./mariaDBRepository";

import { CreateCategoryUseCase } from "../application/createCategoryUseCase";
import { CreateCategoryController } from "./controller/createCategoryController";

import { DeleteCategoryUseCase } from "../application/deleteCatergoryUseCase";
import { DeleteCategoryController } from "./controller/deleteCategoryController";

export const mariaDBRepository = new MariaDBRepository();


export const createCategoryUseCase = new CreateCategoryUseCase(mariaDBRepository);
export const createCategoryController = new CreateCategoryController(createCategoryUseCase);


export const deleteCategoryUseCase = new DeleteCategoryUseCase(mariaDBRepository);
export const deleteCategoryController = new DeleteCategoryController(deleteCategoryUseCase)
