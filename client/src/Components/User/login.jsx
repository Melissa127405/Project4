import { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";



function Login({ onLogin }) {
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const data = {
      username: form.get("username"),
      password: form.get("password")
    };

    try {
      const res = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const user = await res.json();

      if (!res.ok) {
        setError(user.message || "Login failed");
        return;
      }

      onLogin(user); // send user object to parent
    } catch (err) {
      setError("Server error");
    }
  };

  return (
    <Card className="p-4 shadow-sm">
      <h3 className="text-center mb-3">Login</h3>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" name="username" required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" required />
        </Form.Group>

        <Button type="submit" className="w-100" variant="primary">
          Login
        </Button>
      </Form>
    </Card>
  );
}


export default Login;  