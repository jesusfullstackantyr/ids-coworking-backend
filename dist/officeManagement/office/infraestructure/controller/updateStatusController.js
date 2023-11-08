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
class UpdateStatusController {
    constructor(updateStatus) {
        this.updateStatus = updateStatus;
    }
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { status } = req.body;
                const updateStatus = yield this.updateStatus.run(Number(id), status);
                if (updateStatus) {
                    return res.status(201).send({
                        status: "success",
                        data: {
                            update_Status: updateStatus
                        }
                    });
                }
                else {
                    throw new Error("Ocurrió un error al actualizar, oficina no encontrada ");
                }
            }
            catch (error) {
                let errorMessage = "Ocurrió un error desconocido.";
                let errors;
                if (error instanceof Error) {
                    if (error.message.startsWith('[')) {
                        errorMessage = "La validación falló";
                        errors = JSON.parse(error.message);
                    }
                    else {
                        errorMessage = error.message;
                    }
                }
                return res.status(500).send({
                    status: "error",
                    message: errorMessage,
                    errors: errors
                });
            }
        });
    }
}
exports.UpdateStatusController = UpdateStatusController;
