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
exports.MariadbUserRepository = void 0;
const mariaDb_1 = require("../../database/mariaDb");
const user_1 = require("../domain/user");
class MariadbUserRepository {
    addUser(email, password, verified, idRole) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(email, password, verified, idRole);
                let sql = "INSERT INTO users(email, password, verified, idRole) VALUES (?, ?, ?, ?)";
                const params = [email, password, verified, idRole];
                const result = yield (0, mariaDb_1.query)(sql, params);
                // Verificar si la inserción fue exitosa (result.affectedRows > 0) o si tienes otro criterio para validar
                if (result.affectedRows > 0) {
                    // Suponiendo que result.insertId devuelve el ID del usuario insertado en la base de datos
                    const userId = result.insertId;
                    return new user_1.User(email, password, verified, idRole);
                }
                else {
                    // La inserción falló, devolver null u otro valor indicando el fallo
                    return null;
                }
            }
            catch (error) {
                console.error("Error adding user: ", error);
                return null;
            }
        });
    }
}
exports.MariadbUserRepository = MariadbUserRepository;
