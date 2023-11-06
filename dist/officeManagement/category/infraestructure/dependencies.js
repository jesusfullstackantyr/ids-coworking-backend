"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategoryController = exports.getCategoryUseCase = exports.deleteCategoryController = exports.deleteCategoryUseCase = exports.updateCategoryController = exports.updateCategoryUseCase = exports.createCategoryController = exports.createCategoryUseCase = exports.mariaDBRepository = void 0;
const mariaDBRepository_1 = require("./repositories/mariaDBRepository");
const createCategoryUseCase_1 = require("../application/createCategoryUseCase");
const createCategoryController_1 = require("./controller/createCategoryController");
const updateCategoryUseCase_1 = require("../application/updateCategoryUseCase");
const updateCategoryController_1 = require("./controller/updateCategoryController");
const deleteCatergoryUseCase_1 = require("../application/deleteCatergoryUseCase");
const deleteCategoryController_1 = require("./controller/deleteCategoryController");
const getCategoryUseCase_1 = require("../application/getCategoryUseCase");
const getCategoryController_1 = require("./controller/getCategoryController");
exports.mariaDBRepository = new mariaDBRepository_1.MariaDBRepository();
exports.createCategoryUseCase = new createCategoryUseCase_1.CreateCategoryUseCase(exports.mariaDBRepository);
exports.createCategoryController = new createCategoryController_1.CreateCategoryController(exports.createCategoryUseCase);
exports.updateCategoryUseCase = new updateCategoryUseCase_1.UpdateCategoryUseCase(exports.mariaDBRepository);
exports.updateCategoryController = new updateCategoryController_1.UpdateCategoryController(exports.updateCategoryUseCase);
exports.deleteCategoryUseCase = new deleteCatergoryUseCase_1.DeleteCategoryUseCase(exports.mariaDBRepository);
exports.deleteCategoryController = new deleteCategoryController_1.DeleteCategoryController(exports.deleteCategoryUseCase);
exports.getCategoryUseCase = new getCategoryUseCase_1.GetCategoryUseCase(exports.mariaDBRepository);
exports.getCategoryController = new getCategoryController_1.GetCategoryController(exports.getCategoryUseCase);