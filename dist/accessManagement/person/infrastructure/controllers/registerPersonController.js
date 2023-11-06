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
const person_1 = require("../../domain/entities/person");
const class_validator_1 = require("class-validator");
class RegisterPersonController {
    constructor(registerPersonUseCase) {
        this.registerPersonUseCase = registerPersonUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('controller');
            try {
                const { name, lastname, email, phone, occupation, id_address, id_user, } = req.body;
                const status = 'in process';
                const person = new person_1.Person(name, lastname, email, phone, occupation, id_address, id_user, status);
                // Validar los datos utilizando class-validator
                const validationErrors = yield (0, class_validator_1.validate)(person);
                if (validationErrors.length > 0) {
                    // Hay errores de validación, responder con un error 422
                    return res.status(422).json({
                        status: "error",
                        message: "Datos de entrada no válidos",
                        errors: validationErrors,
                    });
                }
                const registerPerson = yield this.registerPersonUseCase.run(name, lastname, email, phone, occupation, id_address, id_user, status);
                if (registerPerson instanceof Error) {
                    return res.status(409).send({
                        status: "error",
                        message: registerPerson.message,
                    });
                }
                if (registerPerson instanceof person_1.Person) {
                    return res.status(201).send({
                        status: "success",
                        data: {
                            name: registerPerson.name,
                            lastname: registerPerson.lastname,
                            email: registerPerson.email,
                            phone: registerPerson.phone,
                            occupation: registerPerson.occupation,
                            id_address: registerPerson.id_address,
                            id_user: registerPerson.id_user,
                            status: registerPerson.status,
                        },
                    });
                }
                else {
                    return res.status(500).send({
                        status: "error",
                        message: "Se registró un error inesperado mientras se registraban los datos.",
                    });
                }
            }
            catch (error) {
                return res.status(500).send({
                    status: "error",
                    message: "An unexpected error occurred. Please try again later.",
                });
            }
        });
    }
}
exports.RegisterPersonController = RegisterPersonController;
