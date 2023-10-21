import { MariaDBRepository } from "./mariaDBRepository";

import { DeleteCategoryUseCase } from "../application/deleteCatergoryUseCase";
import { DeleteCategoryController } from "./controller/deleteCategoryController";

export const mariaDBRepository = new MariaDBRepository();

export const deleteCategoryUseCase = new DeleteCategoryUseCase(mariaDBRepository);
export const deleteCategoryController = new DeleteCategoryController(deleteCategoryUseCase)
