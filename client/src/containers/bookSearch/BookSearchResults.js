import { Card, Container } from "react-bootstrap";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";

const BookSearchResults = () => {
  const books = useSelector((state) => state.bookSearchResults.books);
  const isLoading = useSelector((state) => state.bookSearchResults.isLoading);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {books && books.length > 0 ? (
            <Container className="d-flex justify-content-center flex-wrap search-results-container">
              {books.map((book, index) => (
                <Link to={`/book/${book.industryIdentifiers[0]?.identifier}`} key={book.industryIdentifiers[0]?.identifier} className='book-link'>
                  <Card className="book-card text-center">
                    {book.imageLinks && book.imageLinks.smallThumbnail ? (
                      <Card.Img className="mb-2 card-book-image" src={book.imageLinks.smallThumbnail} variant="top" />
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
            <span>No Books Found</span>
          )}
        </>
      )}
    </>
  )
}

export default BookSearchResults