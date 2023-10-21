import { Request,Response } from "express";
import { GetOfficeUseCase } from "../../appliaction/getOfficeUseCase";


export class GetOfficeController{
    constructor(readonly getOfficeUseCase: GetOfficeUseCase){}

    async get(req: Request, res: Response){
        try {
            let id = parseInt(req.params.id, 10);

            const getOffice = await this.getOfficeUseCase.get(id);

            if (getOffice) {
                return res.status(200).send({
                    status: "success",
                    data: {
                        new_Book: getOffice
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
                message: "An error occurred while adding the book."
            });
        }
    }
}