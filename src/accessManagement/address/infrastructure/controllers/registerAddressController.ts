import { Request, Response } from 'express';
import { RegisterAddressUseCase } from '../../application/registerAddressUseCase';
import { Address } from '../../domain/entities/address';

export class RegisterAddressController {

    constructor(readonly registerAddressUseCase: RegisterAddressUseCase) { }

    async run(req: Request, res: Response) {

        console.log('controller')

        try {
            let {
                mainStreet,
                street_1,
                postalCode,
                street_2,
                colonia,
                municipio,
                country,


            } = req.body
            console.log(req.body)

            let registerAddress = await this.registerAddressUseCase.run(
                mainStreet,
                street_1,
                postalCode,
                street_2,
                colonia,
                municipio,
                country,
            )

            if (registerAddress instanceof Error) {
                return res.status(409).send({
                    status: "error",
                    message: registerAddress.message
                });
            }
            if (registerAddress instanceof Address) {
                return res.status(201).send({
                    status: "success",
                    data: {
                        name: registerAddress.mainStreet,
                        lastname: registerAddress.street_1,
                        email: registerAddress.postalCode,
                        phone: registerAddress.street_2,
                        occupation: registerAddress.colonia,
                        id_address: registerAddress.municipio,
                        id_user: registerAddress.country,
                    }
                })
            }
            else {
                return res.status(500).send({
                    status: "error",
                    message: "Se registró un error inesperado mientras se registraban los datos."
                });
            }

        } catch (error) {
            return res.status(500).send({
                status: "error",
                message: "An unexpected error occurred. Please try again later.",
            });
        }
    }
}