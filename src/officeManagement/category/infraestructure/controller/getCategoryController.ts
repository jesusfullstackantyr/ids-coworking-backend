import { Request, Response } from "express";
import { GetCategoryUseCase } from "../../application/getCategoryUseCase";


export class GetCategoryController{
    constructor(readonly getCategoryUseCase: GetCategoryUseCase){}

    async get(req: Request, res: Response){
        try {
            let id = parseInt(req.params.id, 10);

            const category = await this.getCategoryUseCase.get(id);

            if (category) {
                return res.status(200).send({
                    status: "success",
                    data: {
                        new_Book: category,
                        message:"Category"
                    }
                });
            } else {
                return res.status(500).send({
                    status: "error",
                    message: "An error occurred while adding the category."
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