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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = exports.pool = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const mariadb_1 = __importDefault(require("mariadb"));
const signale_1 = require("signale");
const signale = new signale_1.Signale();
dotenv_1.default.config();
exports.pool = mariadb_1.default.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: 3306, // Agrega el puerto correspondiente aquí
});
// Cambiado de `mysql.createPool` a `createPool`
function query(sql, params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield exports.pool.getConnection();
            signale.success("Conexión exitosa a la BD");
            const result = yield conn.execute(sql, params);
            conn.release();
            return result;
        }
        catch (error) {
            signale.error(error);
            return null;
        }
    });
}
exports.query = query;
