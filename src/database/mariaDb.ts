<<<<<<< HEAD
import * as dotenv from "dotenv";
=======
import dotenv from "dotenv";
>>>>>>> 4937744aa77bfc5f0fd945fc037deae94137f9d1
import mariadb from "mariadb";
import { Signale } from "signale";

dotenv.config();

const signale = new Signale();

const pool = mariadb.createPool({
<<<<<<< HEAD
  host: 'localhost',
  user: 'farrera',
  database: 'pruebas',
  password: '203467',
  connectionLimit: 2,
=======
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  connectionLimit: 10,
>>>>>>> 4937744aa77bfc5f0fd945fc037deae94137f9d1
});

export async function query(sql: string, params: any[]) {
  let conn;
  try {
    conn = await pool.getConnection();
    signale.success("Conexión exitosa a la BD");
<<<<<<< HEAD
    console.log(
      "✅ MariaDB Connection has been established successfully."
    );
=======
>>>>>>> 4937744aa77bfc5f0fd945fc037deae94137f9d1
    const result = await conn.query(sql, params);
    return result;
  } catch (error) {
    signale.error(error);
    return null;
  } finally {
    if (conn) {
<<<<<<< HEAD
      conn.release(); // Devuelve la conexión al pool al finalizar
    }
  }0
=======
      conn.release();
    }
  }
>>>>>>> 4937744aa77bfc5f0fd945fc037deae94137f9d1
}
