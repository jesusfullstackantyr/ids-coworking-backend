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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOfficeController = void 0;
const HTTPStatusCodes_1 = require("../../domain/validation/HTTPStatusCodes");
const officesValidation_1 = require("../../domain/validation/officesValidation");
const s3UploaderMiddleware_1 = __importDefault(require("../storage/s3UploaderMiddleware"));
class UpdateOfficeController {
    constructor(updateOfficeUseCase) {
        this.updateOfficeUseCase = updateOfficeUseCase;
    }
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                (0, s3UploaderMiddleware_1.default)(req, res, () => __awaiter(this, void 0, void 0, function* () {
                    const { name, image_url, status, id_category } = req.body;
                    // Convierte 'id' a un número usando el operador + o parseInt
                    const id = parseInt(req.params.id, 10);
                    // Asegúrate de que el 'id' es un número válido
                    if (isNaN(id)) {
                        return res.status(HTTPStatusCodes_1.HTTPStatusCodes.BAD_REQUEST).send({ status: 'error', message: 'Invalid ID' });
                    }
                    const officeValidation = new officesValidation_1.OfficeValidation(id, name, image_url, status, Number(id_category));
                    yield this.updateOfficeUseCase.execute(officeValidation);
                    res.status(HTTPStatusCodes_1.HTTPStatusCodes.OK).send({ status: 'success', message: 'Office updated successfully' });
                }));
            }
            catch (error) {
                if (error.message === 'Validation failed!') {
                    res.status(HTTPStatusCodes_1.HTTPStatusCodes.BAD_REQUEST).send({ status: 'error', message: 'Validation failed', errors: error.errors });
                }
                else {
                    res.status(HTTPStatusCodes_1.HTTPStatusCodes.INTERNAL_SERVER_ERROR).send({ status: 'error', message: error.message });
                }
            }
        });
    }
}
exports.UpdateOfficeController = UpdateOfficeController;
