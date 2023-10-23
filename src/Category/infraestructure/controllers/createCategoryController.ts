import { Response, Request } from "express";
import { CreateCategoryUseCase } from "../../application/createCategoryUseCase";
import { Category } from "../../domain/category";


export class CreateCategoryController {
    constructor(readonly createCategoryUseCase: CreateCategoryUseCase){}

    async create(req: Request, res: Response) {
        try {
            let { name, price, capacity, space, status } = req.body;

            const createCategory = await this.createCategoryUseCase.create(
                name,
                price,
                capacity,
                space,
                status
            );

            if (createCategory instanceof Error) {
                return res.status(400).send({
                    status: "error",
                    message: createCategory.message,
                });
            }

            if (createCategory instanceof Category) {
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
            } else {
                return res.status(500).send({
                    status: "error",
                    message: "Error al crear la categoria"
                });
            }

        } catch (error) {
            console.error("Error al crear la categoria:", error); // Agregar un registro detallado del error
            return res.status(500).send({
                status: "error",
                message: "An unexpected error occurred. Please try again later.",
            });
        }
    }
}