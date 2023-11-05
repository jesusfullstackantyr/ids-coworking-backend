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
exports.UpdateCategoryUseCase = void 0;
const categoriesValidation_1 = require("../domain/validation/categoriesValidation");
const class_validator_1 = require("class-validator");
class UpdateCategoryUseCase {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    update(id, name, price, capacity, space, status) {
        return __awaiter(this, void 0, void 0, function* () {
            let validationUpdate = new categoriesValidation_1.ValidationUpdateCategory(id, name, price, capacity, space, status);
            const validation = yield (0, class_validator_1.validate)(validationUpdate);
            if (validation.length > 0) {
                throw new Error(JSON.stringify(validation));
            }
            try {
                const updateCategory = yield this.categoryRepository.updateCategory(id, name, price, capacity, space, status);
                return updateCategory;
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.UpdateCategoryUseCase = UpdateCategoryUseCase;
