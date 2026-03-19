import express from "express";
import db from "../dbConnections.js";

const router = express.Router();

// GET answers for a specific question
router.get("/question/:questionID", async (req, res) => {
  const { questionID } = req.params;

  try {
    const [rows] = await db.query(
    "SELECT * FROM answers WHERE questionID = ?", 
      [questionID]
    );

    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error loading answers" });
  }
});

// POST /answers
router.post("/", async (req, res) => {
  try {
    const { content, userID, questionID } = req.body;

    const [result] = await db.query(
      `INSERT INTO answers (content, userID, questionID)
       VALUES (?, ?, ?)`,
      [content, userID, questionID]
    );

    res.json({ insertId: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating answer" });
  }
});

export default router;