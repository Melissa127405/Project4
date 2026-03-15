import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppLayout from "./Components/AppLayout";
import Login from "./Components/Login";
import Questions from "./Components/QA/Questions";
import Answers from "./Components/QA/Answers";
import AppNavbar from "./Components/AppNavbar";

function App() {
  const [user, setUser] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedQuestionID, setSelectedQuestionID] = useState(null);

  // Fetch categories from backend
  useEffect(() => {
    fetch("http://localhost:4000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  // Create a question
  const handleCreateQuestion = async (questionData) => {
    const res = await fetch("http://localhost:4000/questions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(questionData),
    });

    const result = await res.json();
    console.log("Question created:", result);

    // Set selected question so Answers.jsx knows which question to answer
    setSelectedQuestionID(result.insertId);
  };

  // Create an answer
  const handleCreateAnswer = async (answerData) => {
    const res = await fetch("http://localhost:4000/answers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(answerData),
    });

    const result = await res.json();
    console.log("Answer created:", result);
  };

  return (
    <>
   <AppNavbar user={user} onLogout={() => setUser(null)} /> 
  <AppLayout>
    <h2 className="text-center mb-4">React</h2>

    {!user && <Login onLogin={setUser} />}

    {user && (
      <>
        <Questions
          categories={categories}
          userID={user.userID}
          onSubmit={handleCreateQuestion}
        />

        {selectedQuestionID && (
          <Answers
            questionID={selectedQuestionID}
            userID={user.userID}
            onSubmit={handleCreateAnswer}
          />
        )}
      </>
    )}
  </AppLayout>
</>
);
}

export default App;

