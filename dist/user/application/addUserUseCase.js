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
exports.AddUserUseCase = void 0;
class AddUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    addUser(email, password, verified, idRole) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!email || !password) {
                    throw new Error('Email y contraseña son obligatorios.');
                }
                const addedUser = yield this.userRepository.addUser(email, password, verified, idRole);
                if (addedUser === null) {
                    throw new Error('No se pudo agregar el usuario.');
                }
                return addedUser;
            }
            catch (error) {
                throw new Error('Error al agregar usuario: ' + error.message);
            }
        });
    }
}
exports.AddUserUseCase = AddUserUseCase;
