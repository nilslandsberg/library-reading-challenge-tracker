import { Card, Container, Row } from "react-bootstrap";
import LoadingSpinner from "../components/LoadingSpinner";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const RecommendedBooksForReader = ({ updatedReader }) => {
  const books = useSelector((state) => state.bookRecommendations.recommendations);
  const isLoading = useSelector((state) => state.bookSearchResults.isLoading);

  useEffect(() => {
    console.log('books updated')
  }, [books])
  return (
    <>
      { updatedReader.age === "Child" ? (
        <Container className="d-flex justify-content-center">
          <Row className="text-center">
            <h1>Recommended Books for {updatedReader.age}ren</h1>
          </Row>
        </Container>
      ) : (
        <Container className="d-flex justify-content-center">
          <Row className="text-center">
            <h1>Recommended Books for {updatedReader.age}s</h1>
          </Row>
        </Container>
      ) }
    
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {books && books.length > 0 ? (
            <Container className="d-flex justify-content-center flex-wrap search-results-container">
              {books.map((book, index) => (
                <Link to={`/readers/${updatedReader._id}/recommendedbook/${book.isbn}`} key={book.isbn} className='book-link'>
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
              <span>No Books Have Been Recommended for the {updatedReader.age} Age Group</span>
            </Container>
          )}
        </>
      )}
    </>
  )
}

export default RecommendedBooksForReader