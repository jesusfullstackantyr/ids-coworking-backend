import { Request, Response } from "express";
import { UpdateStatus } from "../../appliaction/updateStatusUseCase";
import { ValidatorupdateStatus } from "../../domain/validation/officesValidation";

import { HTTPStatusCodes } from "../../domain/validation/HTTPStatusCodes";

export class UpdateStatusController {
    constructor(private updateStatus: UpdateStatus) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const validator = new ValidatorupdateStatus(req.body.status, req.body.id);

        if (!['activo', 'inactivo', 'mantenimiento'].includes(validator.status)) {
            return res.status(HTTPStatusCodes.BAD_REQUEST).json({
                error: 'El estatus tiene que estar en activo, inactivo, mantenimiento.'
            });
        }

        try {
            const office = await this.updateStatus.run(validator.id, validator.status);
            if (office) {
                return res.status(HTTPStatusCodes.OK).json(office);
            } else {
                return res.status(HTTPStatusCodes.NOT_FOUND).json({
                    error: 'Oficina no encontrada.'
                });
            }
        } catch (error) {
            return res.status(HTTPStatusCodes.INTERNAL_SERVER_ERROR).json({
                error: 'Error interno del servidor.'
            });
        }
    }
}
