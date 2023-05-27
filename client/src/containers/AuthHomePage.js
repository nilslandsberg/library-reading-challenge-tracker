import { Col, Container, Row } from "react-bootstrap"
import MyReaders from "./readerDetails/MyReaders"
import AddReaderButton from "../components/AddReaderButton"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReadersAction } from "../features/readerSlice";
import AllReadersTimeLog from "./readerDetails/AllReadersTimeLog";
import AllReadersTimeLogChart from "./readerDetails/AllReadersTimeLogChart";

const AuthHomePage = () => {
  const username = useSelector((state) => state.userAuth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReadersAction());
  }, [dispatch]);

  return (
    <>
        <Container className="readers">
          <Row className="align-items-center justify-content-between">
            <Col>
              <h3>{username} Readers</h3>
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