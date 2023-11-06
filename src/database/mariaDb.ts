import dotenv from "dotenv";
import mariadb from "mariadb";
import { Signale } from "signale";

const signale = new Signale();
dotenv.config();

<<<<<<< HEAD
const signale = new Signale();

export const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: 3306,
=======
const config = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  database: process.env.DB_DATABASE || 'cowork',
  password: process.env.DB_PASSWORD || 'galletas',
  waitForConnections: true,
>>>>>>> origin/201227-Feature-IC-3-Cancelar-Contrato
  connectionLimit: 10,
  port: Number(process.env.DB_PORT) || 3306,
};

console.log('Configuración de la base de datos:', config);


// Crear el pool de conexiones
const pool = mariadb.createPool(config);  // Cambiado de `mysql.createPool` a `createPool`

export async function query(sql: string, params: any[]) {
    try {
        const conn = await pool.getConnection();
        signale.success("Conexión exitosa a la BD");
        const result = await conn.execute(sql, params);
        conn.release();
        return result;
    } catch (error) {
        signale.error(error);
        return null;
    }
<<<<<<< HEAD
  }
=======
>>>>>>> origin/201227-Feature-IC-3-Cancelar-Contrato
}