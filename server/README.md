#  Nodejs Express

//  3-Tier architecture that lets users register and log in to a forum, where users may ask and answer questions.

## Astrological Signs Q & A 

// I made a simple base of questions for each sign. Although , A user can ask a question, they may only recieve a *no answer for this question responce

# User 

// 1. Users are able to Register 
// 2. Users are able to Login once Registered
// 3. Users are able to see foundational info
//    about each zodiac sign 
// 4. User can Ask a question about a sign 
// 5. User can Log out 


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





# My EEr Diagram for the Database 


![EER Diagram](./src/images/EER%20Diagram.png)

