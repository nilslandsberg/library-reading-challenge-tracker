import { Col, Container, Row } from "react-bootstrap"
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
          <Row className="align-items-center justify-content-between">
            <Col>
              <h3>My Readers</h3>
            </Col>
            <Col className="d-flex justify-content-end">
              <AddReaderButton />
            </Col>
          </Row>
          <Row className="my-readers">
            <MyReaders />
          </Row>
        </Container>
      </> 
  )
}

export default AuthHomePage