import mysql from "mysql2/promise";

let db;

try {
  db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Twilamae@16",
    database: "astro_qa",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

  console.log("Connected to MySQL database (pool created)");
} catch (error) {
  console.error("Error connecting to database:", error);
}

export default db;