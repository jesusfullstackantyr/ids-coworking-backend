import { Request,Response } from "express";
import { GetOfficeUseCase } from "../../application/getOfficeUseCase";


export class GetOfficeController{
    constructor(readonly getOfficeUseCase: GetOfficeUseCase){}

    async get(req: Request, res: Response){

        const id = parseInt(req.params.id);

        try {
            const getOffice = await this.getOfficeUseCase.get(id);

            if (getOffice) {
                return res.status(200).send({
                    status: "success",
                    data: {
                        Office: getOffice
                    }
                });
            } else {
                return res.status(404).send({
                    status: "error",
                    data:null,
                    message:"No se encontraron officionas con el id proporcionado"
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
                message: "An error occurred while adding the Office."
            });
        }
    }
}