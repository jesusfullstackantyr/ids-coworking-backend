import { MakePaymentUseCase } from "../../application/MakePaymentUseCase";
import { Request, Response } from "express";


export class MakePaymentController {
    constructor(readonly makePaymentUseCase: MakePaymentUseCase) {}

    async run(req:Request, res:Response) {
        try {
            let {
               name,
               email,
               card_number,
               cvv,
               expiration_month,
               expiration_year,
               amount,
               description
            } = req.body
            console.log(req.body)

            let payment = await this.makePaymentUseCase.run(
                name,
                email,
                card_number,
                cvv,
                expiration_month,
                expiration_year,
                amount,
                description
            )
            if (payment instanceof Error){
                return res.status(400).send({
                    status: "error",
                    message: payment.message
                })
            }else {
                return res.status(200).send({

                    status: "succes",
                    data: payment
                })
            }
            

        } catch (error) {
           console.log(error)
        }
    }
}

