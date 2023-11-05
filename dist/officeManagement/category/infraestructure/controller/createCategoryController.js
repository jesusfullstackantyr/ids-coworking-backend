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
exports.CreateCategoryController = void 0;
class CreateCategoryController {
    constructor(createCategoryUseCase) {
        this.createCategoryUseCase = createCategoryUseCase;
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { name, price, capacity, space, status } = req.body;
                const createCategory = yield this.createCategoryUseCase.create(name, price, capacity, space, status);
                if (createCategory) {
                    return res.status(201).send({
                        status: "success",
                        data: {
                            name: createCategory.name,
                            price: createCategory.price,
                            capacity: createCategory.capacity,
                            space: createCategory.space,
                            status: createCategory.status
                        },
                        message: "La categoria ha sido creada con éxito",
                    });
                }
                else {
                    return res.status(400).send({
                        status: "error",
                        data: [],
                        validations: [],
                        message: "Error al crear la categoria, intentelo mas tarde"
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
exports.CreateCategoryController = CreateCategoryController;
