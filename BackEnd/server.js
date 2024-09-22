import express from "express"; // Default import

import pool from "./db.js"; // Default import for the pool

const app = express();

app.get("/api/data", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM your_table_name");
    res.json(result.rows);
  } catch (err) {
    console.error("Error executing query", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/Hoodie-Web-App-Proj/", (req, res) => {
  res.send("Welcome to the API!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
