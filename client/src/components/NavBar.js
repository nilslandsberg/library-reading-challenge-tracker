import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
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
          <Nav.Item>
            <Link to='/search' className="navbar-link">Book Search</Link>
          </Nav.Item>
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
        <Navbar.Collapse className="me-auto justify-content-end" id="responsive-navbar-nav">
          <Nav className="navbar-links-container">
            {renderLinks()}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;