import { Col, Container, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckAvailabilityButton from '../components/CheckAvailabilityButton';
import AddBookToReader from './AddBookToReader';

const SelectedBookDetails = () => {
  const books = useSelector((state) => state.bookSearchResults.books);

  // logic to find book in books array by matching the identifier in the url params
  const { identifier } = useParams();
  const isBook = (b) => b.industryIdentifiers[0]?.identifier === identifier;
  const book = books.find(isBook);
  const bookImage = book?.imageLinks?.smallThumbnail;

  return (
    <>
      <Container className="mt-8">
        <Row className="align-items-center">
          <Col md={6} className="text-center mb-4">
            <div className="book-image-container">
              <Image className="book-image" src={bookImage} />
            </div>
            <div className="book-info-container">
              <h3>{book?.title}</h3>
              <div>{book?.authors}</div>
            </div>
          </Col>
          <Col md={6}>
            <div className="book-description mb-4">{book.description}</div>
            <Row>
              <Col>
                <CheckAvailabilityButton book={book} />
              </Col>
            </Row>
            <Row>
              <Col>
                <AddBookToReader book={book} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </>
  );
};

export default SelectedBookDetails;
