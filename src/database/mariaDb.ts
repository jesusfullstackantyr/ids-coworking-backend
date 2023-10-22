import { Client } from 'pg';
import { Signale } from "signale";

const signale = new Signale();
const client = new Client({
    host: 'localhost',
    user: 'postgres',
    database: 'coworking',
    password: 'feisima54321',
    port: 5432, // Puerto por defecto de PostgreSQL
});

client.connect();

export async function query(sql: string, params: any[]) {
    try {
        const result = await client.query(sql, params);
        signale.success("Consulta exitosa");
        return result.rows;
    } catch (error) {
        signale.error(error);
        return null;
    }
}
