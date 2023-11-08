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
exports.MariaDBRepository = void 0;
const office_1 = require("../../domain/entities/office");
const mariaDb_1 = require("../../../../database/mariaDb");
class MariaDBRepository {
    getOffice(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM offices WHERE id = ?";
            try { // Usar id de la oficina en lugar de id_public
                const result = yield (0, mariaDb_1.query)(sql, [id]);
                if (result && result.length > 0) {
                    // Mapea los resultados en objetos de oficina
                    const officeList = result.map((data) => new office_1.Office(data.id, data.name, data.image_url, data.status, data.id_category));
                    return officeList;
                }
                else {
                    return null;
                }
            }
            catch (error) {
                console.error('Error al obtener el libro:', error);
                return null;
            }
        });
    }
    create(office) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `
      INSERT INTO offices (name, image_url, status, id_category)
      VALUES (?, ?, ?, ?);
    `;
            const values = [office.name, office.image_url, office.status, office.id_category];
            try {
                yield (0, mariaDb_1.query)(sql, values);
            }
            catch (error) {
                console.error('Error al crear oficina:', error);
                throw new Error('Error al crear la oficina en la base de datos');
            }
        });
    }
    update(office) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `
        UPDATE offices
        SET name = ?, image_url = ?, status = ?, id_category = ?
        WHERE id = ?;
    `;
            const values = [office.name, office.image_url, office.status, office.id_category, office.id];
            try {
                yield (0, mariaDb_1.query)(sql, values);
                return office; // Return the updated office
            }
            catch (error) {
                console.error('Error al Actualizar oficina:', error);
                throw new Error('Error al Actualizar la oficina en la base de datos');
            }
        });
    }
    // agregar otros métodos para interactuar con la tabla de "offices",  
    // como getById, update, delete, etc.
    updateStatus(id, newStatus) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield (0, mariaDb_1.query)(`UPDATE offices SET status = ? WHERE id = ?`, [newStatus, id]);
            if (result.affectedRows === 0) {
                return null;
            }
            const updatedOffice = yield (0, mariaDb_1.query)(`SELECT * FROM offices WHERE id = ?`, [id]);
            const officeData = updatedOffice[0];
            return new office_1.Office(officeData.id, officeData.name, officeData.image_url, officeData.status, officeData.id_category);
        });
    }
}
exports.MariaDBRepository = MariaDBRepository;
