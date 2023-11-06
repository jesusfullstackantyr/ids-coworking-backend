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
exports.RegisterPersonUseCase = void 0;
const person_1 = require("../domain/entities/person");
const personValidate_1 = require("../domain/validators/personValidate");
class RegisterPersonUseCase {
    constructor(PersonRepository) {
        this.PersonRepository = PersonRepository;
    }
    run(name, lastname, email, phone, occupation, id_address, id_user, status) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!name || !lastname || !email || !phone || !occupation || !id_address || !id_user) {
                    return null;
                }
                const person = new person_1.Person(name, lastname, email, phone, occupation, id_address, id_user, status);
                const personValidator = new personValidate_1.PersonValidate(person);
                yield personValidator.validate();
                const registerPerson = yield this.PersonRepository.registerPerson(name, lastname, email, phone, occupation, id_address, id_user, status);
                if (registerPerson === null) {
                    return null;
                }
                return registerPerson;
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.RegisterPersonUseCase = RegisterPersonUseCase;
