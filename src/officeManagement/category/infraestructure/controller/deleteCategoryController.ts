import { Request,Response } from "express";
import { DeleteCategoryUseCase } from "../../application/deleteCatergoryUseCase";


export class DeleteCategoryController{
    constructor( readonly deleteCategoryUseCase: DeleteCategoryUseCase){}

    async delete(req: Request, res: Response){
        try {
            let id = parseInt(req.params.id, 10);

            const deleteCategory = await this.deleteCategoryUseCase.delete(id);

            if (deleteCategory) {
                return res.status(200).send({
                    status: "success",
                    data: {
                        new_Book: deleteCategory,
                        message:"Category deleted successfully"
                    }
                });
            } else {
                return res.status(500).send({
                    status: "error",
                    message: "An error occurred while adding the publication."
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
                message: "An error occurred while fetching the book."
            });
        }
    }
}