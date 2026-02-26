import express from 'express';
import db from '../dbConnections.js';

const router=express.Router();

router.get('/', async (req, res) => {
    console.log ("request form client recived")
    let [result] = await db.query ("select * from categories")
    console.log (result)
    res.send (result)
})

router.get ("/:id",(req,res)=> {
    res.send ("Categories Request Recieved 2"  )
})

export default router;