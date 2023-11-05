import { Response, Request } from "express";
import { CreateCategoryUseCase } from "../../application/createCategoryUseCase";


export class CreateCategoryController {
    constructor(readonly createCategoryUseCase: CreateCategoryUseCase) { }

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
            } else {
                return res.status(400).send({
                    status: "error",
                    data: [],
                    validations: [],
                    message: "Error al crear la categoria, intentelo mas tarde"
                });
            }

        } catch (error) {
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
    }
}