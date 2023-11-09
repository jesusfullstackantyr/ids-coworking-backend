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
exports.CreateOfficeController = void 0;
const HTTPStatusCodes_1 = require("../../domain/validation/HTTPStatusCodes");
const officesValidation_1 = require("../../domain/validation/officesValidation");
const s3UploaderMiddleware_1 = __importDefault(require("../storage/s3UploaderMiddleware")); // Asegúrate de actualizar la ruta
class CreateOfficeController {
    constructor(createOfficeUseCase) {
        this.createOfficeUseCase = createOfficeUseCase;
    }
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Primero, usa el middleware para procesar la imagen y cargarla a S3.
                (0, s3UploaderMiddleware_1.default)(req, res, () => __awaiter(this, void 0, void 0, function* () {
                    // Una vez que se haya ejecutado el middleware, el cuerpo de la petición tendrá todos los datos del formulario.
                    console.log(req.body);
                    const { name, image_url, status, id_category } = req.body;
                    // Asegúrate de que id_category se convierta en un número si viene como texto.
                    const officeValidation = new officesValidation_1.OfficeValidation(0, name, image_url, status, Number(id_category));
                    yield this.createOfficeUseCase.execute(officeValidation);
                    res.status(HTTPStatusCodes_1.HTTPStatusCodes.CREATED).send({ status: 'success', message: 'Office created successfully' });
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
exports.CreateOfficeController = CreateOfficeController;
