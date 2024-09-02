import pkg from "pg";
const { Pool } = pkg;

import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  port: process.env.PG_PORT,
});

// Test the connection
pool.query("SELECT NOW()", (err, res) => {
  try {
    console.log("Connected to PostgreSQL:", res.rows[0]);
  } catch (err) {
    console.error("Error connecting to PostgreSQL", err);
  }
});

export default pool;
