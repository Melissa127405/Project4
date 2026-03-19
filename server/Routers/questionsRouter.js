import express from "express";
import db from "../dbConnections.js";

console.log("questionsRouter loaded");  // <--- CONFIRMS FILE IS LOADED



const router = express.Router();

// GET all questions
router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM questions");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching questions" });
  }
});

// GET questions by category
router.get("/category/:categoryID", async (req, res) => {
  const { categoryID } = req.params;

  try {
    const [rows] = await db.query(
     "SELECT * FROM questions WHERE categoryID = ?", 
      [categoryID]
    );

    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error loading questions" });
  }
});

export default router;