import express from 'express';
import db from '../dbConnections.js';

const router=express.Router();

// Get all questions 
router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM questions");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching questions" });
  }
});


// POST create a new question
router.post("/", async (req, res) => {
  try {
    const { title, userID, categoryID } = req.body;

    const [result] = await db.query(
      `INSERT INTO questions (title, userID, categoryID)
       VALUES (?, ?, ?)`,
      [title, userID, categoryID]
    );

    res.json({ insertId: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating question" });
  }
});

export default router;