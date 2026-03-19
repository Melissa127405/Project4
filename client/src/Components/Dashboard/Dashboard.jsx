import { useEffect, useState } from "react";
import { Row, Col, Card, ListGroup, Button } from "react-bootstrap";

function Dashboard({ user }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);

  console.log("Selected question:", selectedQuestion);

  // ⭐ Load categories on mount
  useEffect(() => {
    fetch("http://localhost:4000/categories")
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error(err));
  }, []);

  // ⭐ Load questions when a category is selected
  useEffect(() => {
    if (!selectedCategory) return;

    setSelectedQuestion(null);
    setAnswers([]);

    fetch(`http://localhost:4000/questions/category/${selectedCategory}`)
      .then(res => res.json())
      .then(data => setQuestions(data))
      .catch(err => console.error(err));
  }, [selectedCategory]);

  // ⭐ Load answers when a question is selected
  useEffect(() => {
    if (!selectedQuestion) return;

    fetch(`http://localhost:4000/answers/question/${selectedQuestion}`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setAnswers(data);
        } else {
          setAnswers([]);
        }
      })
      .catch(err => {
        console.error(err);
        setAnswers([]);
      });
  }, [selectedQuestion]);

  return (
    <Row className="mt-4">
      {/* LEFT SIDEBAR */}
      <Col md={3}>
        <Card className="shadow-sm" style={{ height: "80vh", overflowY: "auto" }}>
          <Card.Header>
            <strong>Categories</strong>
          </Card.Header>

          <ListGroup variant="flush">
            {categories.map(cat => (
              <ListGroup.Item
                key={cat.categoryID}
                action
                active={selectedCategory === cat.categoryID}
                onClick={() => setSelectedCategory(cat.categoryID)}
              >
                {cat.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      </Col>

      {/* MAIN CONTENT */}
      <Col md={9}>
        <Card className="p-4 shadow-sm">
          <h3 className="mb-3">Welcome, {user.username}</h3>

          {!selectedCategory && (
            <h4 className="text-center text-muted">
              Select a Category to view its questions
            </h4>
          )}

          {selectedCategory && !selectedQuestion && (
            <>
              <h4>Questions</h4>

              {questions.length === 0 && (
                <p className="text-muted">No questions in this category.</p>
              )}

              <ListGroup>
                {questions.map(q => (
                  <ListGroup.Item
                    key={q.questionID}
                    action
                    onClick={() => setSelectedQuestion(q.questionID)}
                  >
                    {q.title}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </>
          )}

          {selectedQuestion && (
            <>
              <h4>Answers</h4>

              {answers.length === 0 && (
                <p className="text-muted">No answers yet for this question.</p>
              )}

              <ListGroup>
                {answers.map(a => (
                  <ListGroup.Item key={a.answerID}>
                    {a.content}
                  </ListGroup.Item>
                ))}
              </ListGroup>

              <Button
                variant="secondary"
                className="mt-3"
                onClick={() => setSelectedQuestion(null)}
              >
                Back to Questions
              </Button>
            </>
          )}
        </Card>
      </Col>
    </Row>
  );
}

export default Dashboard;