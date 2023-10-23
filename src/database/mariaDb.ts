import * as dotenv from "dotenv";
import mariadb from "mariadb";
import { Signale } from "signale";

dotenv.config();

const signale = new Signale();

const pool = mariadb.createPool({
  host: 'localhost',
  user: 'farrera',
  database: 'pruebas',
  password: '203467',
  connectionLimit: 2,
});

export async function query(sql: string, params: any[]) {
  let conn;
  try {
    conn = await pool.getConnection();
    signale.success("Conexión exitosa a la BD");
    console.log(
      "✅ MariaDB Connection has been established successfully."
    );
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
