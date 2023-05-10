import { useEffect, useState } from "react";
import { Card, FloatingLabel, Form, Spinner, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { login } from "../features/authUserSlice";
import CustomAlert from "../components/CustomAlert";
import { getReadersAction } from "../features/readerSlice";

const LoginForm = () => {
  const user = useSelector((state) => state.userAuth)
  const errorMessage = useSelector((state) => state.authMessage);
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ loading, setLoading ] = useState(false);

  const handleFormSubmit = async (data) => {
    setLoading(true);
    await dispatch(login(data));
    setLoading(false);
  }
  
  useEffect(() => {
    if (user.isLoggedIn) {
      dispatch(getReadersAction());
      navigate('/');
    } else {
      if (errorMessage.message) {
        console.log(errorMessage.message);
        <CustomAlert variant="danger" message='test' />
      }
    }
  }, [user, errorMessage, dispatch, navigate]);

  return (
    <div className="pt-5">
      <Card className="col-3 mx-auto" style={{ minWidth: "300px" }}>
        <Card.Header>Login</Card.Header>
          <Card.Body>
          {errorMessage.message && <CustomAlert message={errorMessage.message} />}
            <Form onSubmit={handleSubmit(handleFormSubmit)}> 
              <FloatingLabel controlId="formBasicUsername" className="mb-3" label={
                <span>
                  <span className="red-required">* </span>
                  Username
                </span>
              }>
                <Form.Control type="username" placeholder="Enter Username" {...register("username")} required />
              </FloatingLabel>
              <FloatingLabel controlId="formBasicPassword" className="mb-3" label={
                <span>
                  <span className="red-required">* </span>
                  Password
                </span>}>
                <Form.Control type="password" placeholder="Password" {...register("password")} required />
              </FloatingLabel>
              {loading ? (
                <Button variant="secondary" disabled>
                <Spinner as="span" animation="border" size="sm" role="status"/>
                <span>{' '}Loading...</span>
              </Button>
              ) : (
                <Button variant="primary" type="submit">Login</Button>
              )}
            </Form>
          </Card.Body>
      </Card>
    </div>
  )
}

export default LoginForm;