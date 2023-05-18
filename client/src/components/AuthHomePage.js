import { Container, Row } from "react-bootstrap"
import MyReaders from "../containers/MyReaders"
import AddReaderButton from "./AddReaderButton"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getReadersAction } from "../features/readerSlice";

const AuthHomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReadersAction());
  }, [dispatch]);

  return (
    <>
        <Container className="readers">
          <Row className="align-items-center">
            <h3>My Readers <span><AddReaderButton /></span></h3>
            
          </Row>
          <Row className="my-readers">
            <MyReaders />
          </Row>
        </Container>
        <hr />
        <Container className="reccomended-books">
        </Container>
      </> 
  )
}

export default AuthHomePage