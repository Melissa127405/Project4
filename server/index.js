import express from 'express' 
import cors from 'cors' 
import studentRouter from './Routers/studentRouter.js'
import courseRouter from './Routers/courseRouter.js'
import userRouter from './Routers/userRouter.js'


const server = express(); 
server.use(express.json()) 
server.use(cors()) 


//http://localhost:4000/students/
//http://localhost:4000/students/1
server.use("/students", studentRouter) 
server.use ("/courses", courseRouter) 
server.use("/users", userRouter)  //http://localhost:4000/users/1


server.get("/", (req, res) => { 
res.send("The server is running") 
}) 

server.listen(4000, () => { 
console.log("The server is running at port 4000") 
})