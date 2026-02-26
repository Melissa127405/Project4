import express from 'express';
import db from '../dbConnections.js';

const router=express.Router();

router.get('/', async (req, res) => {
    console.log ("request form client recived")
    let [result] = await db.query ("SELECT * FROM questions")
    console.log (result)
    res.send (result)
})

export default router;