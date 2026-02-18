import mysql from 'mysql2/promise' 

let db 

try { 
db =  await mysql.createConnection ( { 
host: 'localhost', 
user: 'root', 
password: 'Twilamae@16', 
database: 'schoolDB' 
}) 
console.log ("Connected to database") 
} 
catch (error) { 
console.log ("error connecting to database: ", error) 
} 

export default db;