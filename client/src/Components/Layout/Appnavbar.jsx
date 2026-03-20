import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function AppNavbar({ user, onLogout, onShowLogin, onShowRegister }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>Astrology Seekers</Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            {user && (
              <>
                <Nav.Link>Ask Question</Nav.Link>
                <Nav.Link>My Questions</Nav.Link>
              </>
            )}
          </Nav>

          <Nav>
            {!user && (
              <>
              <Nav.Link onClick={onShowLogin}>Login</Nav.Link>
              <Nav.Link onClick={onShowRegister}>Register</Nav.Link>
              </>
            )}


            {user && (
              <Button variant="outline-light" onClick={onLogout}>
                Logout
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;