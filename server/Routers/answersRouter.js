import express from "express";
import db from "../dbConnections.js";

const router = express.Router();

// GET /answers?questionID=#
router.get("/", async (req, res) => {
  try {
    const { questionID } = req.query;

    if (!questionID) {
      return res.status(400).json({ message: "questionID is required" });
    }

    const [rows] = await db.query(
      "SELECT * FROM answers WHERE questionID = ?",
      [questionID]
    );

    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching answers" });
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