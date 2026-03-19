import { useState, useEffect } from "react";
import { Form, Button, Card, ListGroup } from "react-bootstrap";



function Answers({ questionID, userID }) {
  const [answers, setAnswers] = useState([]);
  const [error, setError] = useState("");

  // Load answers for this question
 useEffect(() => {
  if (!questionID) return;   //  Correct guard for this component

  fetch(`http://localhost:4000/answers/question/${questionID}`)
    .then(res => res.json())
    .then(data => setAnswers(data))
    .catch(err => console.error(err));
  }, [questionID]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const data = {
      content: form.get("content"),
      userID: userID,
      questionID: questionID
    };

    try {
      const res = await fetch("http://localhost:4000/answers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const result = await res.json();

      if (!res.ok) {
        setError(result.message || "Error posting answer");
        return;
      }

      // Refresh answers
      setAnswers([...answers, { content: data.content, userID }]);
    } catch (err) {
      setError("Server error");
    }
  };

 return (
    <Card className="p-4 shadow-sm mt-4">
      <h3 className="mb-3">Answers</h3>

      <ListGroup className="mb-3">
        {answers.map((ans, i) => (
          <ListGroup.Item key={i}>
            <strong>User {ans.userID}:</strong> {ans.content}
          </ListGroup.Item>
        ))}
      </ListGroup>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="answerInput">Your Answer</Form.Label>
          <Form.Control id="answerInput" type="text" name="content" required />  
        </Form.Group>

        <Button type="submit" className="w-100">
          Submit Answer
        </Button>
      </Form>
    </Card>
  );
}

 

export default Answers;

