import { Col, Container, Row } from "react-bootstrap"
import MyReaders from "../containers/readerDetails/MyReaders"
import AddReaderButton from "./AddReaderButton"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getReadersAction } from "../features/readerSlice";
import AllReadersTimeLog from "../containers/readerDetails/AllReadersTimeLog";
import AllReadersTimeLogChart from "../containers/readerDetails/AllReadersTimeLogChart";

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
        <hr/>
        <Container>
          <AllReadersTimeLog />
          <AllReadersTimeLogChart />
        </Container>
      </> 
  )
}

export default AuthHomePage