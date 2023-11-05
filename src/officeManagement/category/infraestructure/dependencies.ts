import { MariaDBRepository } from "./repositories/mariaDBRepository";

import { CreateCategoryUseCase } from "../application/createCategoryUseCase";
import { CreateCategoryController } from "./controller/createCategoryController";

import { UpdateCategoryUseCase } from "../application/updateCategoryUseCase";
import { UpdateCategoryController } from "./controller/updateCategoryController";

import { DeleteCategoryUseCase } from "../application/deleteCatergoryUseCase";
import { DeleteCategoryController } from "./controller/deleteCategoryController";

import { GetCategoryUseCase } from "../application/getCategoryUseCase";
import { GetCategoryController } from "./controller/getCategoryController";

export const mariaDBRepository = new MariaDBRepository();


export const createCategoryUseCase = new CreateCategoryUseCase(mariaDBRepository);
export const createCategoryController = new CreateCategoryController(createCategoryUseCase);

export const updateCategoryUseCase = new UpdateCategoryUseCase(mariaDBRepository);
export const updateCategoryController = new UpdateCategoryController(updateCategoryUseCase);

export const deleteCategoryUseCase = new DeleteCategoryUseCase(mariaDBRepository);
export const deleteCategoryController = new DeleteCategoryController(deleteCategoryUseCase)

export const getCategoryUseCase = new GetCategoryUseCase(mariaDBRepository);
export const getCategoryController = new GetCategoryController(getCategoryUseCase)