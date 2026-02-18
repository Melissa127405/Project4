import express from 'express'
import db from '../dbConnections.js';

const router = express.Router()

router.get ("/", async (req,res)=> {
  console.log ('method: ', req.method)
  let userName =  req.body.userName
  let password = req.body.password
  console.log (userName, password)
  // const {userName, password} = req.body
  // console.log (userName, password)
  let [response] = await db.query (`SELECT * FROM users WHERE userName=? AND password=?`, [userName, password])
  console.log (response)
  res.send (response)
})

export default router;