import express from 'express';
import cors from 'cors';

const server = express();

server.get ("/", (req, res) => {         // "This code tells the server what to do when someone visits the home page."
    res.send ("The server is running!")   
 })   


server.listen (4000, ()=>{
    console.log("Server is running on port 4000")  // "This code tells the server to start listening for incoming requests."
 
 });