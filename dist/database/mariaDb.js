"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const signale_1 = require("signale");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const mariadb_1 = __importDefault(require("mariadb"));
const dotenv = __importStar(require("dotenv"));
const signale = new signale_1.Signale();
dotenv.config();
const pool = mariadb_1.default.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: 3307, // Agrega el puerto correspondiente aquí
});
// Cambiado de `mysql.createPool` a `createPool`
function initPool() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield pool.getConnection();
            signale.success("Conexión exitosa a la BD");
            const sqlFilePath = path_1.default.join(__dirname, 'initialize.sql');
            const sqlFileContent = fs_1.default.readFileSync(sqlFilePath, "utf-8");
            const sqlStatements = sqlFileContent.split(';'); // Divide el contenido en sentencias SQL individuales
            for (const sqlStatement of sqlStatements) {
                if (sqlStatement.trim() !== '') {
                    yield conn.query(sqlStatement); // Ejecuta cada sentencia SQL individual
                }
            }
            conn.release();
        }
        catch (error) {
            signale.error("Error al conectar con la BD:", error);
        }
    });
}
exports.initPool = initPool;
function query(sql, params) {
    return __awaiter(this, void 0, void 0, function* () {
        let conn;
        try {
            conn = yield pool.getConnection();
            const result = yield conn.query(sql, params);
            return result;
        }
        catch (error) {
            signale.error(error);
            return null;
        }
        finally {
            if (conn) {
                conn.release();
            }
        }
    });
}
exports.query = query;
