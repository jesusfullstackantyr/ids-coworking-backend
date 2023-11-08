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
exports.GetCategoryController = void 0;
class GetCategoryController {
    constructor(getCategoryUseCase) {
        this.getCategoryUseCase = getCategoryUseCase;
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = parseInt(req.params.id);
                console.log("Category ID:", id); // Agrega esta línea para registrar el ID que estás intentando obtener.
                const category = yield this.getCategoryUseCase.get(id);
                if (category) {
                    return res.status(200).send({
                        status: "success",
                        data: {
                            Cagory: category,
                            message: "Category"
                        }
                    });
                }
                else {
                    console.error("Category not found"); // Agrega esta línea para registrar que la categoría no se encontró.
                    return res.status(404).send({
                        status: "error",
                        message: "Category not found."
                    });
                }
            }
            catch (error) {
                console.error("Error:", error); // Agrega esta línea para registrar detalles sobre el error.
                if (error instanceof Error) {
                    if (error.message.startsWith("[")) {
                        return res.status(400).send({
                            status: "error",
                            message: "Validation failed",
                            errors: JSON.parse(error.message)
                        });
                    }
                }
                return res.status(500).send({
                    status: "error",
                    message: "An error occurred while fetching the category."
                });
            }
        });
    }
}
exports.GetCategoryController = GetCategoryController;
