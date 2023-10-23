import dotenv from "dotenv";
import mariadb from "mariadb";
import { Signale } from "signale";

dotenv.config();

const signale = new Signale();

const pool = mariadb.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  database: process.env.DB_DATABASE || "soa-offi-cate",
  password: process.env.DB_PASSWORD || "Miller2001Lopez",
  port: 3308, // Agrega el puerto correspondiente aquí
  connectionLimit: 10,
});

export async function query(sql: string, params: any[]) {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query(sql, params);
        return rows;
    } catch (error) {
        signale.error(error);
        return null;
    } finally {
        if (conn) conn.end();
    }
}