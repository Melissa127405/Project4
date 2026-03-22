#  Nodejs Express

//  3-Tier architecture that lets users register and log in to a forum, where users may ask and answer questions.

## Astrological Signs Q & A 

// I made a simple base of questions for each sign. Although , A user can ask a question, they may only recieve a *no answer for this question responce

## User Features

1. Register a new account  
2. Log in with existing credentials  
3. View foundational information about each zodiac sign  
4. Ask a question about any sign  
5. Log out  

> Note: At this stage, user-submitted questions return a default  
> **“No answer for this question”** response unless seeded in the database.




# Database schema + Example Data 

//  A MySQL database

    Tables for:
    users,categories,questions,answers
    Example data already inserted 	
    A working EER diagram
    SQL scripts that create and populate the database


# Application Layer 

// Nodejs + Express JSON API 

   to acces database and returns JSON 
   Express server running on port 4000

   Routes:
   auth/register
   auth/login
   categories
   questions
   answers 


# future plans 

 // 1. Adding ability to put in your bith date 
       to go directly to that sign 
    2. Compatability Q&A 
    3. Sharpen the design visuals    
    

# DataBase 

// I have included .env.example in the server side to allow everything to run locally 



# My EEr Diagram for the Database 


![EER Diagram](./server/Image/EER%20Diagram.png)


