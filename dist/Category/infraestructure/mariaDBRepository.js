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
const category_1 = require("../domain/category");
class MariaDBRepository {
    createCategory(name, price, capacity, space, status) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = "INSERT INTO CATEGORIES (name, price, capacity, space, status) VALUES (?,?,?,?,?)";
                const params = [name, price, capacity, space, status];
                const result = yield (0, mariaDb_1.query)(sql, params);
                // Ensure that the result contains the necessary data for creating a new Category object
                if (result && result.insertId) {
                    const createdCategory = new category_1.Category(result.insertId, name, price, capacity, space, status);
                    return createdCategory;
                }
                else {
                    throw new Error("Failed to create the category. No valid result obtained from the database.");
                }
            }
            catch (error) {
                console.error("Error: ", error);
                throw new Error("Failed to create the category. Please try again later.");
            }
        });
    }
    deleteCategory(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Verifica si la categoría existe y no está marcada como eliminada
                const checkSql = "SELECT * FROM categories WHERE id = ? AND is_deleted = 0";
                const [existingCategory] = yield (0, mariaDb_1.query)(checkSql, [id]);
                if (!Array.isArray(existingCategory) || existingCategory.length === 0) {
                    return null; // La categoría no existe o ya ha sido eliminada.
                }
                // Marca la categoría como eliminada
                const sql = "UPDATE categories SET is_deleted = 1 WHERE id = ?";
                yield (0, mariaDb_1.query)(sql, [id]);
                // También actualiza las oficinas relacionadas
                const updateOfficesSql = "UPDATE offices SET is_deleted = 1 WHERE id_category = ?";
                yield (0, mariaDb_1.query)(updateOfficesSql, [id]);
                return `Category successfully marked as deleted.`;
            }
            catch (error) {
                console.error('Error al marcar la categoría como eliminada:', error);
                return null;
            }
        });
    }
}
exports.MariaDBRepository = MariaDBRepository;