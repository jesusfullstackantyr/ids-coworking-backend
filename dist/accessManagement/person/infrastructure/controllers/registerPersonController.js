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
exports.RegisterPersonController = void 0;
const person_1 = require("../../domain/person");
class RegisterPersonController {
    constructor(registerPersonUseCase) {
        this.registerPersonUseCase = registerPersonUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('controller');
            try {
                let { name, lastname, email, phone, occupation, id_address, id_user, } = req.body;
                console.log(req.body);
                const status = 'process';
                let registerPerson = yield this.registerPersonUseCase.run(name, lastname, email, phone, occupation, id_address, id_user, status);
                if (registerPerson instanceof Error) {
                    return res.status(409).send({
                        status: "error",
                        message: registerPerson.message
                    });
                }
                if (registerPerson instanceof person_1.Person) {
                    return res.status(201).send({
                        status: "success",
                        data: {
                            //id: registerPerson.id,
                            name: registerPerson.name,
                            lastname: registerPerson.lastname,
                            email: registerPerson.email,
                            phone: registerPerson.phone,
                            occupation: registerPerson.occupation,
                            id_address: registerPerson.id_address,
                            id_user: registerPerson.id_user,
                            status: registerPerson.status
                        }
                    });
                }
                else {
                    return res.status(500).send({
                        status: "error",
                        message: "Se registró un error inesperado mientras se registraban los datos."
                    });
                }
            }
            catch (error) {
                // Error específico
                /*if (error instanceof Error) {
                    if (error.message.includes('Duplicate entry') && error.message.includes('for key \'users.email\'')) {
                        return res.status(409).send({
                            status: "error",
                            message: "The email address is already in use. Please use a different email address.",
                        });
                    } else if (error.message.startsWith('[')) {  // Suponiendo que los errores de validación comienzan con un corchete
                        return res.status(400).send({
                            status: "error",
                            message: "Validation failed",
                            errors: JSON.parse(error.message)  // mensaje de error como objeto
                        });
                    }
                }*/
                // Error general, error 500
                return res.status(500).send({
                    status: "error",
                    message: "An unexpected error occurred. Please try again later.",
                });
            }
        });
    }
}
exports.RegisterPersonController = RegisterPersonController;
