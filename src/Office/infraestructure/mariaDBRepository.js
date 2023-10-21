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
const mariaDb_1 = require("../../database/mariaDb");
class MariaDBRepository {
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
}
exports.MariaDBRepository = MariaDBRepository;
