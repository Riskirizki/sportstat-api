//import "dotenv/config";
import * as pg from "pg";
const { Client } = pg;

export const client = new Client({
  connectionString: process.env.DATABASE_URL,

  // host: process.env.POSTGRES_HOST,
  // user: process.env.POSTGRES_USER,
  // password: process.env.POSTGRES_PASSWORD,
  // database: process.env.POSTGRES_DB,
  // port: Number(process.env.POSTGRES_PORT),
});

await client.connect();

const res = await client.query("SELECT * from sports");

const sports = res.rows;

console.log({ sports });

await client.end();
