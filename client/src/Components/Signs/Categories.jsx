import { useEffect, useState } from "react";
import { Card, ListGroup, Spinner } from "react-bootstrap";

function Categories({ onSelectCategory }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading categories:", err);
        setLoading(false);
      });
  }, []);

  return (
    <Card className="p-3 shadow-sm mt-4">
      <h3 className="mb-3">Categories</h3>

      {loading && <Spinner animation="border" />}

      {!loading && (
        <ListGroup>
          {categories.map((cat) => (
            <ListGroup.Item
              key={cat.categoryID}
              action
              onClick={() => onSelectCategory?.(cat.categoryID)}
            >
              {cat.name}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Card>
  );
}

export default Categories;