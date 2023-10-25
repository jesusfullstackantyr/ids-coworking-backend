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
const mariaDb_1 = require("../../database/mariaDb");
const person_1 = require("../domain/person");
class MariadbPersonRepository {
    registerPerson(name, lastname, email, phone, occupation, id_address, id_user, status) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(name, lastname, email, phone, occupation, id_address, id_user, status);
                let sql = "INSERT INTO person(name, lastname, email, phone, occupation, id_address, id_user, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
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
    updatePersonAddress(id, id_address) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const personQuery = "SELECT * FROM person WHERE id = ?";
                const personResult = yield (0, mariaDb_1.query)(personQuery, [id]);
                if (personResult.length === 0) {
                    console.error("No se encontró ninguna persona con el ID proporcionado");
                    return personResult;
                }
                const updateQuery = "UPDATE person SET id_address = ? WHERE id = ?";
                const updateResult = yield (0, mariaDb_1.query)(updateQuery, [id_address, id]);
                if (updateResult.affectedRows > 0) {
                    console.log("Persona aprobada con éxito");
                    return updateResult;
                }
                else {
                    console.error("No se pudo actualizar el estado de la persona");
                    return updateResult;
                }
            }
            catch (error) {
                console.error("Error al validar la persona:", error);
                return null;
            }
        });
    }
    validatePerson(id_user, status) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const personQuery = "SELECT * FROM person WHERE id_user = ?";
                const personResult = yield (0, mariaDb_1.query)(personQuery, [id_user]);
                if (personResult.length === 0) {
                    console.error("No se encontró ninguna persona con el ID proporcionado");
                    return false;
                }
                const updateQuery = "UPDATE person SET status = ? WHERE id_user = ?";
                const updateResult = yield (0, mariaDb_1.query)(updateQuery, [status, id_user]);
                if (updateResult.affectedRows > 0) {
                    console.log("Persona aprobada con éxito");
                    return true;
                }
                else {
                    console.error("No se pudo actualizar el estado de la persona");
                    return false;
                }
            }
            catch (error) {
                console.error("Error al validar la persona:", error);
                return false;
            }
        });
    }
    listAllPersons() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = `SELECT id, name, lastname, email, phone, occupation, id_address, id_user, status FROM person`;
                // No necesitas parámetros en esta consulta, por lo que no es necesario definir 'params'.
                const params = []; // No hay parámetros en esta consulta
                const result = yield (0, mariaDb_1.query)(sql, params);
                // Verifica si se obtuvieron resultados
                if (Array.isArray(result) && result.length > 0) {
                    // Mapea los resultados a objetos Person y devuelve una matriz de Person
                    const persons = result.map((row) => new person_1.Person(row.name, row.lastname, row.email, row.phone.toString(), row.occupation, row.id_address, row.id_user, row.status));
                    return persons;
                }
                else {
                    // No se encontraron registros, devuelve una matriz vacía
                    return [];
                }
            }
            catch (error) {
                console.error("Error al listar personas: ", error);
                return null;
            }
        });
    }
}
exports.MariadbPersonRepository = MariadbPersonRepository;
