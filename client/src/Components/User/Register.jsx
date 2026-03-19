import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Register.css";

function Register({ onShowLogin }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");   // ⭐ moved to top level

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!form.agree) {
      newErrors.agree = "You must agree before registering";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setSuccess("You are registered! Redirecting to login...");

      setTimeout(() => {
        onShowLogin();   // ⭐ switch to login screen
      }, 1500);
    }
  };

  return (
    <>
      {success && (
        <div className="success-text mb-2">
          {success}
        </div>
      )}

      <Form onSubmit={handleSubmit} className="register-form">

        {/* USERNAME */}
        <div className="form-row">
          <Form.Group className="flex-grow-1">
            <Form.Label htmlFor="regUsername">Username</Form.Label>
            <Form.Control
              id="regUsername"
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              isInvalid={!!errors.username}
            />
          </Form.Group>

          {errors.username && (
            <div className="error-text">{errors.username}</div>
          )}
        </div>

        {/* PASSWORD */}
        <div className="form-row">
          <Form.Group className="flex-grow-1">
            <Form.Label htmlFor="regPassword">Password</Form.Label>
            <Form.Control
              id="regPassword"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              isInvalid={!!errors.password}
            />
          </Form.Group>

          {errors.password && (
            <div className="error-text">{errors.password}</div>
          )}
        </div>

        {/* CHECKBOX */}
        <div className="form-row">
          <Form.Group className="flex-grow-1 d-flex align-items-center">
            <Form.Check
              id="regAgree"
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              isInvalid={!!errors.agree}
              label="I agree to the terms"
            />
          </Form.Group>

          {errors.agree && (
            <div className="error-text">{errors.agree}</div>
          )}
        </div>

        <Button type="submit" className="mt-3 w-100">
          Register
        </Button>
      </Form>
    </>
  );
}

export default Register;