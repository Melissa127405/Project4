import express from 'express';
import db from '../dbConnections.js';

const router=express.Router();

router.get("/", async (req, res) => {
  try {
    console.log("Categories request received");
    const [rows] = await db.query("SELECT * FROM categories");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching categories" });
  }
});

router.get ("/:id",(req,res)=> {
    res.send ("Categories Request Recieved 2"  )
})

export default router;