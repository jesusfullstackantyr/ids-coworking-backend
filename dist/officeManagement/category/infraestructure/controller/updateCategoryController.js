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
exports.UpdateCategoryController = void 0;
class UpdateCategoryController {
    constructor(updateCategoryUseCase) {
        this.updateCategoryUseCase = updateCategoryUseCase;
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { name, price, capacity, space, status } = req.body;
                const updateCategory = yield this.updateCategoryUseCase.update(Number(id), name, price, capacity, space, status);
                if (updateCategory) {
                    return res.status(200).send({
                        status: "succes",
                        data: {
                            id: updateCategory.id,
                            name: updateCategory.name,
                            price: updateCategory.price,
                            capacity: updateCategory.capacity,
                            space: updateCategory.space,
                            status: updateCategory.status,
                        },
                        message: "La categoria ha sido actuliza",
                    });
                }
                else {
                    res.status(400).send({
                        status: "error",
                        data: [],
                        validations: [],
                        message: "Error al actualizar la categoria",
                    });
                }
            }
            catch (error) {
                if (error instanceof Error) {
                    if (error.message.startsWith('[')) {
                        return res.status(400).send({
                            status: "error",
                            message: "Validation failed",
                            errors: JSON.parse(error.message)
                        });
                    }
                }
                return res.status(500).send({
                    status: "error",
                    message: "An error occurred while adding the book."
                });
            }
        });
    }
}
exports.UpdateCategoryController = UpdateCategoryController;
