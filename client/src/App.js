import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import AppLayout from "./Components/Layout/Applayout";
import Login from "./Components/User/Login";
import Register from "./Components/User/Register";
import Dashboard from "./Components/Dashboard/Dashboard";
import AppNavbar from "./Components/Layout/Appnavbar";
import SignInfo from "./Components/SignInfo/SignInfo";

function App() {
  const [user, setUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <>
      <AppNavbar
        user={user}
        onLogout={handleLogout}
        onShowLogin={() => setShowRegister(false)}
        onShowRegister={() => setShowRegister(true)}
      />

      <h2 className="text-center mb-4">The Cosmos are Calling</h2>
<Routes>

  <Route
    path="/"
    element={
      user ? (
        <Dashboard user={user} />   
      ) : showRegister ? (
        <Register onShowLogin={() => setShowRegister(false)} />
      ) : (
        <Login
          onLogin={setUser}
          onShowRegister={() => setShowRegister(true)}
        />
      )
    }
  />


  <Route
    path="/sign-info"
    element={
      user ? (
        <SignInfo />   
      ) : (
        <Navigate to="/" />
      )
    }
  />

</Routes>
      
    </>
  );
}

export default App;