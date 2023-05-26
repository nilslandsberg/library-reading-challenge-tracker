import { Col, Container, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckAvailabilityButton from '../../components/CheckAvailabilityButton';
import AddBookToReader from '../readerDetails/AddBookToReader';
import GoBackToSearchResultsButton from "./GoBackToSearchResultsButton";
import multipleAuthors from "../../services/multipleAuthors";

const SelectedSearchBookDetails = () => {
  const books = useSelector((state) => state.bookSearchResults.books);

  // logic to find book in books array by matching the identifier in the url params
  const { identifier } = useParams();
  const isBook = (b) => b.industryIdentifiers[0]?.identifier === identifier;
  const book = books.find(isBook);
  const bookImage = book?.imageLinks?.smallThumbnail;

  const authors = multipleAuthors(book);
  return (
    <>
      <Container className="mt-10">
        <Row>
          <Col md={6} className="text-center mb-4">
            <div className="book-image-container">
              <Image className="book-image" src={bookImage} alt="No Image Available" />
            </div>
            <div className="book-info-container mb-3">
              <h3>{book?.title}</h3>
              <div>{authors}</div>
            </div>
            <GoBackToSearchResultsButton />
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
            </Row>
            <Row>
              <Col md={8}>
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
