import { Request, Response } from "express";
import { UpdateStatus } from "../../appliaction/updateStatusUseCase";

export class UpdateStatusController {
    constructor(private updateStatus: UpdateStatus) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { id, status } = req.body;

        if (!['activo', 'inactivo', 'mantenimiento'].includes(status)) {
            return res.status(400).json({
                error: 'El estatus tiene que estar en activo, inactivo, mantenimiento.'
            });
        }

        try {
            const office = await this.updateStatus.run(id, status);
            if (office) {
                return res.status(200).json(office);
            } else {
                return res.status(404).json({
                    error: 'Oficina no encontrada.'
                });
            }
        } catch (error) {
            return res.status(500).json({
                error: 'Error interno del servidor.'
            });
        }
    }
}
