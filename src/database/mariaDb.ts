import * as mysql from "mysql2/promise";  // Cambiado de `mysql.createPool` a `createPool`
import { Signale } from "signale";
import fs from "fs";
import path from 'path';
import mariadb from "mariadb";

import * as dotenv from "dotenv";

const signale = new Signale();
dotenv.config();

const pool = mariadb.createPool({

  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: 3307, // Agrega el puerto correspondiente aquí
})
// Cambiado de `mysql.createPool` a `createPool`

export async function initPool() {
  try {
    const conn = await pool.getConnection();
    signale.success("Conexión exitosa a la BD");

    const sqlFilePath = path.join(__dirname, 'initialize.sql');
    const sqlFileContent = fs.readFileSync(sqlFilePath, "utf-8");
    const sqlStatements = sqlFileContent.split(';'); // Divide el contenido en sentencias SQL individuales

    for (const sqlStatement of sqlStatements) {
      if (sqlStatement.trim() !== '') {
        await conn.query(sqlStatement); // Ejecuta cada sentencia SQL individual
      }
    }


    conn.release();
  } catch (error) {
    signale.error("Error al conectar con la BD:", error);
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
      conn.release();
    }
  }
}
