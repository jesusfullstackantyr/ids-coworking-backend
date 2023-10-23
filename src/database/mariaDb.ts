import dotenv from "dotenv";
import mariadb from "mariadb";
import { Signale } from "signale";

dotenv.config();


const signale = new Signale();

const pool = mariadb.createPool({
  host: "localhost", // Reemplaza con tu host
  user: "root", // Reemplaza con tu usuario
  database: "SOA", // Reemplaza con el nombre de tu base de datos
  password: "Viridiana17", // Reemplaza con tu contraseña
  connectionLimit: 10,
});

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
