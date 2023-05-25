import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/userAuthSlice";



const UserLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = async () => {
    await dispatch(logout());
    navigate('/');
  }

  return (
    <Dropdown.Item onClick={handleClick}>
      Logout
    </Dropdown.Item>
  )
}

export default UserLogout;