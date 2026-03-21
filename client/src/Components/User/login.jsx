import { useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import "./Login.css";
import skymoon from "../../images/skymoon.jpg";

function Login({ onLogin, onShowRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:4000/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        setError("Invalid username or password");
        return;
      }

      const user = await res.json();
      onLogin(user); // This triggers Dashboard in App.js

    } catch (err) {
      console.error(err);
      setError("Server error. Please try again.");
    }
  };


return (
  <div
    className="login-page"
    style={{ backgroundImage: `url(${skymoon})` }}
  >
    <Card className="login-card p-4 shadow-sm mx-auto" style={{ maxWidth: "400px" }}>
      <h3 className="text-center mb-3">Login</h3>

      <p className="text-center mt-3">
        <span onClick={onShowRegister} className="register-link">
          Create an account
        </span>
      </p>

      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button type="submit" className="w-100">
          Login
        </Button>
      </Form>
    </Card>
  </div>
);
}  

export default Login;