import { Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md" fixed="top">
      <Container fluid>
        <Navbar.Brand href="/">
          2023 Summer Reading Log
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default NavBar;