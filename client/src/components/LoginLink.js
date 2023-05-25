import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";


const LoginLink = () => {

  return (
    <Nav.Item>
      <Nav.Link href="/login">
        Login
      </Nav.Link>
    </Nav.Item>
  )
}

export default LoginLink