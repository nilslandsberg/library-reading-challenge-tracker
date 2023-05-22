import { Col, Container, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckAvailabilityButton from '../components/CheckAvailabilityButton';
import AddBookToReader from './AddBookToReader';
import RecommendBookButton from './RecommendBookButton';

const SelectedSearchBookDetails = () => {
  const readerBooks = useSelector((state) => state.readerDetails.readerDetails.books);

  const { identifier } = useParams();

  const selectedBook = readerBooks.filter(book => book.isbn.includes(identifier));
  const book = selectedBook[0]
  
  return (
    <>
      <Container className="mt-8">
        <Row className="align-items-center">
          <Col md={6} className="text-center mb-4">
            <div className="book-image-container">
              <Image className="book-image" src={book.imageUrl} />
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
              <Col className="d-flex justify-content-end">
                <RecommendBookButton book={book} />
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center">
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

export default SelectedSearchBookDetails;
