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
exports.DeleteCategoryController = void 0;
class DeleteCategoryController {
    constructor(deleteCategoryUseCase) {
        this.deleteCategoryUseCase = deleteCategoryUseCase;
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = parseInt(req.params.id, 10);
                const deleteCategory = yield this.deleteCategoryUseCase.delete(id);
                if (deleteCategory) {
                    return res.status(200).send({
                        status: "success",
                        data: {
                            Category: deleteCategory,
                            message: "Category deleted successfully"
                        }
                    });
                }
                else {
                    return res.status(500).send({
                        status: "error",
                        message: "An error occurred while adding the publication."
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
                    message: "An error occurred while fetching the book."
                });
            }
        });
    }
}
exports.DeleteCategoryController = DeleteCategoryController;
