import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/authUserSlice";
// import { setModalClosed } from "../features/modalOpenSlice";


const UserLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = async () => {
    await dispatch(logout());
    // await dispatch(setModalClosed());
    navigate('/login');
  }

  return (
    <Dropdown.Item onClick={handleClick}>
      Logout
    </Dropdown.Item>
  )
}

export default UserLogout;