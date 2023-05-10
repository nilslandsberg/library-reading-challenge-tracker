import { Container, Row } from "react-bootstrap"
import MyReaders from "../containers/MyReaders"
import AddReaderButton from "./AddReaderButton"
import afroBoy from '../files/avatars/4043235_afro_boy_child_kid_icon.svg';

const AuthHomePage = () => {
  return (
    <>
        <Container className="readers">
          <Row className="my-readers">
            <MyReaders />
            <AddReaderButton />
          </Row>
        </Container>
        <hr />
        <img src={afroBoy} alt="things" />
      </> 
  )
}

export default AuthHomePage