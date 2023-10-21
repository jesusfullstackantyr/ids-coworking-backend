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
exports.query = exports.initPool = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const promise_1 = __importDefault(require("mysql2/promise"));
const signale_1 = require("signale");
dotenv_1.default.config();
const signale = new signale_1.Signale();
const pool = promise_1.default.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    waitForConnections: true,
    connectionLimit: 10,
});
function initPool() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield pool.getConnection();
            signale.success("Conexión exitosa a la BD");
            conn.release();
        }
        catch (error) {
            signale.error("Error al intentar conectar con la BD:", error);
        }
    });
}
exports.initPool = initPool;
function query(sql, params) {
    return __awaiter(this, void 0, void 0, function* () {
        let conn;
        try {
            conn = yield pool.getConnection();
            const [result] = yield conn.execute(sql, params);
            return result;
        }
        catch (error) {
            signale.error(error);
            return null;
        }
        finally {
            if (conn) {
                conn.release(); // Devuelve la conexión al pool al finalizar
            }
        }
    });
}
exports.query = query;
