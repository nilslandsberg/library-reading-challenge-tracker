import { Button, Card, Form, FloatingLabel, Spinner} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signup } from "../features/authUserSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CustomAlert from "../components/CustomAlert";
import { useState } from "react";


const SignUpForm = () => {
  const errorMessage = useSelector((state) => state.authMessage);
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (data) => {
    setLoading(true);
    dispatch(signup(data))
      .then((response) => {
        setLoading(false);
        if (response.error) {
          reset();
        } else {
          navigate('/');
          reset();
        }
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });;
  }


  return (
    <div className="pt-5">
      <Card className="col-3 mx-auto" style={{ minWidth: "300px" }}>
        <Card.Header>Sign Up</Card.Header>
        <Card.Body>
          {errorMessage.message && <CustomAlert message="Account already exists." />}
          <Form onSubmit={handleSubmit(handleFormSubmit)}> 
            <FloatingLabel controlId="formBasicUsername" className="mb-3" label={
              <span>
                <span className="red-required">* </span>
                Username
              </span>
            }>
              <Form.Control type="text" placeholder="Username" {...register("username")} required />
            </FloatingLabel>
            <FloatingLabel controlId="formBasicEmail" className="mb-3" label={
              <span>
                <span className="red-required">* </span>
                Email Address
              </span>
            }>
              <Form.Control type="email" placeholder="Enter Email" {...register("email")} required />
            </FloatingLabel>

            <FloatingLabel controlId="formBasicPassword" className="mb-3" label={
              <span>
                <span className="red-required">* </span>
                Password
              </span>
            }>
              <Form.Control type="password" placeholder="Password" {...register("password")} required />
            </FloatingLabel>

            {loading ? (
                <Button variant="secondary" disabled>
                <Spinner as="span" animation="border" size="sm" role="status"/>
                <span>{' '}Loading...</span>
              </Button>
              ) : (
                <Button variant="primary" type="submit">Sign Up</Button>
              )}
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default SignUpForm