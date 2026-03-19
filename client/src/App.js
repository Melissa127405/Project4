import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppLayout from "./Components/Layout/Applayout";
import Login from "./Components/User/Login";
import Questions from "./Components/Q&A/Questions";
import Answers from "./Components/Q&A/Answers";
import AppNavbar from "./Components/Layout/Appnavbar";
import Register from "./Components/User/Register";
import Dashboard from "./Components/Dashboard/Dashboard";


function App() {
  const [user, setUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false);
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
      <h2 className="text-center mb-4">The Cosmos are Calling </h2>

      {/* LOGIN SCREEN */}
      {!user && !showRegister && (
        <Login 
          onLogin={setUser} 
          onShowRegister={() => setShowRegister(true)} 
        />
      )}

      {/* REGISTER SCREEN */}
      {!user && showRegister && (
        <Register 
          onShowLogin={() => setShowRegister(false)} 
        />
      )}

      {/* DASHBOARD AFTER LOGIN */}
      {user && <Dashboard user={user} />}
    </AppLayout>
  </>
);
}

export default App;

