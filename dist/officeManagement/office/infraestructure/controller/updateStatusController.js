"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStatusController = void 0;
const officesValidation_1 = require("../../domain/validation/officesValidation");
const HTTPStatusCodes_1 = require("../../domain/validation/HTTPStatusCodes");
class UpdateStatusController {
    constructor(updateStatus) {
        this.updateStatus = updateStatus;
    }
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const validator = new officesValidation_1.ValidatorupdateStatus(req.body.id, req.body.status);
            if (!['activo', 'inactivo', 'mantenimiento'].includes(validator.status)) {
                return res.status(HTTPStatusCodes_1.HTTPStatusCodes.BAD_REQUEST).json({
                    error: 'El estatus tiene que estar en activo, inactivo, mantenimiento.'
                });
            }
            try {
                const office = yield this.updateStatus.run(validator.id, validator.status);
                if (office) {
                    return res.status(HTTPStatusCodes_1.HTTPStatusCodes.OK).json(office);
                }
                else {
                    return res.status(HTTPStatusCodes_1.HTTPStatusCodes.NOT_FOUND).json({
                        error: 'Oficina no encontrada.'
                    });
                }
            }
            catch (error) {
                return res.status(HTTPStatusCodes_1.HTTPStatusCodes.INTERNAL_SERVER_ERROR).json({
                    error: 'Error interno del servidor.'
                });
            }
        });
    }
}
exports.UpdateStatusController = UpdateStatusController;
