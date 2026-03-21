import express from "express";
import db from "../dbConnections.js";
import bcrypt from "bcrypt";

const router = express.Router();

// POST/register/login
router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const [results] = await db.query(
      "INSERT INTO users (username, password) VALUES (?, ?)",
       [username, hashedPassword]
    );

   res.json({
      message: "User registered successfully",
      userId: results.insertId
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error during registration" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // 1. Find user by username
    const [rows] = await db.query(
      "SELECT * FROM users WHERE username = ?",
      [username]
    );

    if (rows.length === 0) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const user = rows[0];

    // 2. Compare hashed password
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // 3. Success
    res.json({
      id: user.id,
      username: user.username
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error during login" });
  }
});



  

   

export default router;