"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryUseCase = void 0;
const categoriesValidation_1 = require("../domain/validation/categoriesValidation");
const class_validator_1 = require("class-validator");
class CreateCategoryUseCase {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    create(name, price, capacity, space, status) {
        return __awaiter(this, void 0, void 0, function* () {
            let validationCategory = new categoriesValidation_1.ValidationCreateCategory(name, price, capacity, space, status);
            const validation = yield (0, class_validator_1.validate)(validationCategory);
            if (validation.length > 0) {
                throw new Error(JSON.stringify(validation));
            }
            try {
                const createCategory = yield this.categoryRepository.createCategory(name, price, capacity, space, status);
                return createCategory;
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.CreateCategoryUseCase = CreateCategoryUseCase;
