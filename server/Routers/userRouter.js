import express from "express";
import db from "../dbConnections.js";

const router = express.Router();

// POST /login
router.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;

    console.log("Login attempt:", username, password);

    const [rows] = await db.query(
      "SELECT * FROM users WHERE username = ? AND password = ?",
      [username, password]
    );

    if (rows.length === 0) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Return the first matching user
    res.json(rows[0]);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error during login" });
  }
});

export default router;