import { Col, Container, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckAvailabilityButton from '../components/CheckAvailabilityButton';
import AddBookToReader from './AddBookToReader';
import GoBackToReaderDetailsButton from "./GoBackToReaderDetailsButton";

const RecommendedBookDetails = () => {
  const recommendedBooks = useSelector((state) => state.bookRecommendations.recommendations);

  const { identifier } = useParams();
  console.log(recommendedBooks)
  const selectedBook = recommendedBooks.filter(book => book.isbn.includes(identifier));
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
              <Col className="d-flex justify-content-center">
                <CheckAvailabilityButton book={book} />
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
      <GoBackToReaderDetailsButton />
      <ToastContainer />
    </>
  );
};

export default RecommendedBookDetails;