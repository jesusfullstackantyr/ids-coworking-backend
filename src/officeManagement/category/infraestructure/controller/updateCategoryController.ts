import { Response, Request } from "express";
import { UpdateCategoryUseCase } from "../../application/updateCategoryUseCase";
import { stat } from "fs";

export class UpdateCategoryController {
    constructor(readonly updateCategoryUseCase: UpdateCategoryUseCase) { }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { name, price, capacity, space, status } = req.body;

            const updateCategory = await this.updateCategoryUseCase.update(
                Number(id),
                name,
                price,
                capacity,
                space,
                status
            );

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
            } else {
                res.status(400).send({
                    status: "error",
                    data: [],
                    validations: [],
                    message: "Error al actualizar la categoria",
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