import { Col, Container, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckAvailabilityButton from '../../components/CheckAvailabilityButton';
import AddBookToReader from './AddBookToReader';
import RecommendBookButton from '../recommendedBooks/RecommendBookButton';
import GoBackToReaderDetailsButton from "./GoBackToReaderDetailsButton";
import multipleAuthors from "../../services/multipleAuthors";

const ReaderBookDetails = () => {
  const readerBooks = useSelector((state) => state.readerDetails.readerDetails.books);

  const { identifier } = useParams();

  const selectedBook = readerBooks.filter(book => book.isbn.includes(identifier));
  const book = selectedBook[0]
  
  const authors = multipleAuthors(book);

  return (
    <>
      <Container className="mt-10">
        <Row>
          <Col md={6} className="text-center mb-4">
            <div className="book-image-container">
              <Image className="book-image" src={book.imageUrl} />
            </div>
            <div className="book-info-container mb-3">
              <h3>{book?.title}</h3>
              <div>{authors}</div>
            </div>
            <GoBackToReaderDetailsButton />
          </Col>
          <Col md={6}>
            <div className="book-description mb-4">
              <div className="book-description-content">
                {book.description}
              </div>
            </div>
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

export default ReaderBookDetails;
