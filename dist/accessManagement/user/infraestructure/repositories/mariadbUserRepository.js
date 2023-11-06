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
const mariaDb_1 = require("../../../../database/mariaDb");
const user_1 = require("../../domain/entities/user");
class MariadbUserRepository {
    getUser(id, idRole) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let sql = "SELECT * FROM user WHERE id = ? AND idRole = ?";
                const result = yield (0, mariaDb_1.query)(sql, [id, idRole]);
                if (result.length > 0) {
                    const userRow = result[0];
                    const user = new user_1.User(userRow.id, userRow.email, userRow.password, userRow.verified, userRow.idRole);
                    return user;
                }
                return null;
            }
            catch (Error) {
                console.error("Error buscando user: ", Error);
                return null;
            }
        });
    }
}
exports.MariadbUserRepository = MariadbUserRepository;
