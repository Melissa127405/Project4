import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AppLayout({ children }) {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          {children}
        </Col>
      </Row>
    </Container>
  );
}

export default AppLayout;