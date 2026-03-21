import express from 'express'; 
import cors from 'cors';

import categoriesRouter from './Routers/categoriesRouter.js';
import questionsRouter from './Routers/questionsRouter.js';  
import answersRouter from './Routers/answersRouter.js';  
import userRouter from './Routers/userRouter.js';

const server = express(); 

server.use(express.json());
server.use(cors()); 



server.use("/categories", categoriesRouter)  //http://localhost:4000/categories/1 
server.use ("/questions", questionsRouter)  //http://localhost:4000/questions/1  
server.use ("/answers", answersRouter)  //http://localhost:4000/answers/1 
server.use("/user", userRouter)  //http://localhost:4000/login/1


server.get("/", (req, res) => { 
res.send("The server is running"); 
}) 

server.listen(4000, () => { 
console.log("The server is running at port 4000"); 
})