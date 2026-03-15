import { useState } from "react";
import { Form, Button, FloatingLabel, Card } from "react-bootstrap";



function Questions({ categories, userID, onQuestionCreated }) {
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const data = {
      title: form.get("title"),
      categoryID: form.get("categoryID"),
      userID: userID
    };

    try {
      const res = await fetch("http://localhost:4000/questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const result = await res.json();

      if (!res.ok) {
        setError(result.message || "Error creating question");
        return;
      }

      onQuestionCreated(result.insertId);
    } catch (err) {
      setError("Server error");
    }
  };

 return (
    <Card className="p-4 shadow-sm mt-4">
      <h3 className="mb-3">Ask a Question</h3>

      <Form onSubmit={handleSubmit}>
        <FloatingLabel label="Question Title" className="mb-3">
          <Form.Control type="text" name="title" required />
        </FloatingLabel>

        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Select name="categoryID" required>
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat.categoryID} value={cat.categoryID}>
                {cat.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Button type="submit" className="w-100">
          Submit Question
        </Button>
      </Form>
    </Card>
  );
}

 

export default Questions;
