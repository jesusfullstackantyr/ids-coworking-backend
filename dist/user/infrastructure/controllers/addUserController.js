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
exports.AddUserController = void 0;
const user_1 = require("../../domain/user");
class AddUserController {
    constructor(addUserUseCase) {
        this.addUserUseCase = addUserUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('controller');
            try {
                const { email, password, verified, idRole } = req.body;
                console.log(req.body);
                let addedUser = yield this.addUserUseCase.addUser(email, password, verified, idRole);
                if (addedUser instanceof Error) {
                    return res.status(409).send({
                        status: "error",
                        message: addedUser.message
                    });
                }
                if (addedUser instanceof user_1.User) {
                    return res.status(201).send({
                        status: "success",
                        data: {
                            email: addedUser.email,
                            verified: addedUser.verified,
                            idRole: addedUser.idRole
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
                return res.status(500).send({
                    status: "error",
                    message: "Ocurrió un error inesperado. Por favor, inténtalo de nuevo más tarde.",
                });
            }
        });
    }
}
exports.AddUserController = AddUserController;
