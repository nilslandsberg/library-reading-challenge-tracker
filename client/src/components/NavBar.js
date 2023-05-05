import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useSelector } from "react-redux";
import Login from "./Login";
import SignUp from "./SignUp";
import UserLogout from "./UserLogout";

const NavBar = () => {
  const userIsLoggedIn = useSelector((state) => state.userAuth.isLoggedIn);
  const username = useSelector((state) => state.userAuth.user);

  const renderLinks = () => {
    if (userIsLoggedIn) {
      return (
        <>
          <Dropdown style={{ marginLeft: '10px' }}>
            <Dropdown.Toggle className="nav-dropdowns" variant="light" id="dropdown-logout">
              {username}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <UserLogout />
            </Dropdown.Menu>
          </Dropdown>
        </>
      );
    } else {
      return (
        <>
          <SignUp />
          <Login />
        </>
      )
    }
  }
  return (
    <Navbar bg="dark" variant="dark" expand="md" fixed="top">
      <Container fluid>
        <Navbar.Brand href="/" className="navbar-brand">
          2023 Summer Reading Log
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            {renderLinks()}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;