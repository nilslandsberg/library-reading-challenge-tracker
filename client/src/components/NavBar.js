import { Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const NavBar = () => {
  return (
    <NavBar bg="light" variant="dark" expand="md" fixed="top">
      <Container fluid>
        <Navbar.Brand href="/">
          2023 Summer Reading Log
        </Navbar.Brand>
      </Container>
    </NavBar>
  )
}

export default NavBar;