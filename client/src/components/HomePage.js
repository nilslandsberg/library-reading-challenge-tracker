import { Container, Row } from 'react-bootstrap';
import MyReaders from '../containers/MyReaders';
import batman from '../files/avatars/4043232_avatar_batman_comics_hero_icon.svg';
import afroBoy from '../files/avatars/4043235_afro_boy_child_kid_icon.svg';
import AddReaderButton from './AddReaderButton';

const HomePage = () => {
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

export default HomePage 