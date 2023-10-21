import dotenv from "dotenv";
import mariadb from "mariadb";
import { Signale } from "signale";

dotenv.config();

const signale = new Signale();

const pool = mariadb.createPool({
  host:'localhost',
  port: 3008, // Especifica el puerto de MariaDB
  user:'root',
  database:'soa',
  password: 'Miller2001Lopez',
  connectionLimit: 10,
  acquireTimeout:500
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
  }
}
