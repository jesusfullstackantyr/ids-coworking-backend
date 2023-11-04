import { MakePaymentUseCase } from "../../application/MakePaymentUseCase";
import { Request, Response } from "express";

/*
    {
        payload:{
            card:{},
            user:{},
            office:{},
            contract:{}
        }
       
    }
*/


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
               description,
               id_contract,
               id_card,
               id_user
            } = req.body
            
            //mandar a llamar servicio de openPay

            // almacenar tarjeta de cliente

            // crear registro de nuevo pago

            let payment = await this.makePaymentUseCase.run(
                name,
                email,
                card_number,
                cvv,
                expiration_month,
                expiration_year,
                amount,
                description,
                id_contract,
                id_card,
                id_user
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

