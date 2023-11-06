import dotenv from "dotenv";
import mariadb from "mariadb";
import { Signale } from "signale";

dotenv.config();

const signale = new Signale();


// Define las variables locales
const DB_HOST = 'localhost'; // Cambia esto por tu host
const DB_USER = 'root'; // Cambia esto por tu nombre de usuario
const DB_DATABASE = 'soa'; // Cambia esto por el nombre de tu base de datos
const DB_PASSWORD = ''; // Cambia esto por tu contraseña
const DB_PORT = 3306; // Cambia esto al puerto que utilices, por defecto es 3306 para MariaDB


// Crea el pool utilizando las variables locales
const pool = mariadb.createPool({
  host: DB_HOST,
  user: DB_USER,
  database: DB_DATABASE,
  password: DB_PASSWORD,
  port: DB_PORT,
  connectionLimit: 10,
});

// Exporta el pool
export { pool };


export async function query(sql: string, params: any[]) {
  let conn;
  try {
    conn = await pool.getConnection();
    signale.success("Conexión exitosa a la BD");
    const result = await conn.query(sql, params);
    return result;
  } catch (error) {
    signale.error(error);
    return null;
  } finally {
    if (conn) {
      conn.release(); // Devuelve la conexión al pool al finalizar
    }
  }0
}