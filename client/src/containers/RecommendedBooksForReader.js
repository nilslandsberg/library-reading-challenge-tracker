import { Card, Container, Row } from "react-bootstrap";
import LoadingSpinner from "../components/LoadingSpinner";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const RecommendedBooksForReader = () => {
  const books = useSelector((state) => state.bookRecommendations.recommendations);
  const reader = useSelector((state) => state.readerDetails.readerDetails);
  const isLoading = useSelector((state) => state.bookSearchResults.isLoading);

  return (
    <>
    <Container className="d-flex justify-content-center">
      <Row className="text-center">
        <h1>Recommended Books for {reader.age}s</h1>
      </Row>
    </Container>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {books && books.length > 0 ? (
            <Container className="d-flex justify-content-center flex-wrap search-results-container">
              {books.map((book, index) => (
                <Link to={`/readers/${reader._id}/recommendedbook/${book.isbn}`} key={book.isbn} className='book-link'>
                  <Card className="book-card text-center">
                    {book.imageUrl ? (
                      <Card.Img className="mb-2" src={book.imageUrl} variant="top" />
                    ) : (
                      <span className="m-5">No Image Available</span>
                    )}
                    <Card.Body>
                      <Card.Title>
                        {book.title}
                      </Card.Title>
                      {book.authors && book.authors[0] && (
                        <Card.Text>Author: {book.authors[0]}</Card.Text>
                      )}
                    </Card.Body>
                  </Card>
                </Link>
              ))}
            </Container> 
          ) : (
            <Container className="d-flex justify-content-center">
              <span>No Books Have Been Recommended for the {reader.age} Age Group</span>
            </Container>
          )}
        </>
      )}
    </>
  )
}

export default RecommendedBooksForReader