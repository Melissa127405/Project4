import express from 'express';
import db from '../dbConnections.js';

const router=express.Router();

router.push = async (req, res) => {
    console.log ("request form client recived")
    let {category, question, answer} = req.body
    console.log (category, question, answer)
    let [result] = await db.query (`INSERT INTO questions (category, question, answer) VALUES (?,?,?)`, [category, question, answer])
    console.log (result)
    res.send (result)
}

export default router;