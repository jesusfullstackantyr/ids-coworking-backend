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
exports.MariadbPersonRepository = void 0;
const mariaDb_1 = require("../../../database/mariaDb");
const person_1 = require("../domain/person");
class MariadbPersonRepository {
    registerPerson(name, lastname, email, phone, occupation, id_address, id_user, status) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(name, lastname, email, phone, occupation, id_address, id_user, status);
                let sql = "INSERT INTO coworking_db.Person(name, lastname, email, phone, occupation, id_address, id_user, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
                const params = [name, lastname, email, phone, occupation, id_address, id_user, status];
                const result = yield (0, mariaDb_1.query)(sql, params);
                return new person_1.Person(name, lastname, email, phone, occupation, id_address, id_user, status);
            }
            catch (error) {
                console.error("Error adding person: ", error);
                return null;
            }
        });
    }
}
exports.MariadbPersonRepository = MariadbPersonRepository;
