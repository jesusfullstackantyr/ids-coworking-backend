import dotenv from "dotenv";
import mariadb from "mariadb";
import { Signale } from "signale";

dotenv.config();

const signale = new Signale();

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  connectionLimit: 10,
});

export async function initPool() {
  try {
    const conn = await pool.getConnection();
    signale.success("Conexión exitosa a la BD");
    conn.release();
  } catch (error) {
    signale.error("Error al intentar conectar con la BD:", error);
  }
}

export async function query(sql: string, params: any[]) {
  let conn;
  try {
    conn = await pool.getConnection();
    const result = await conn.query(sql, params);
    return result;
  } catch (error) {
    signale.error(error);
    return null;
  } finally {
    if (conn) {
      conn.release(); // Devuelve la conexión al pool al finalizar
    }
  }
}
