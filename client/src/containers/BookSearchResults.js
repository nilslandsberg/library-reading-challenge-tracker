import { Card, Container } from "react-bootstrap";
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";

const BookSearchResults = () => {
  const books = useSelector((state) => state.bookSearchResults.books);
  const navigate = useNavigate();
  
  const handleBookClick = (bookIdentifier) => {
    navigate(`/book/` + bookIdentifier)
  }

  return (
    <>
      {books && books.length > 0 ? (
        <Container className="d-flex justify-content-center flex-wrap search-results-container">
          {books.map((book, index) => (
          <Card className="book-card text-center" key={book.industryIdentifiers[0]?.identifier || book.title} onClick={() => handleBookClick(book.industryIdentifiers[0]?.identifier || book.title.split(' ').join('_'))}>
            {book.imageLinks && book.imageLinks.smallThumbnail ? (
              <Card.Img className="mb-2" src={book.imageLinks.smallThumbnail} variant="top" />
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
         
          ))}
        </Container> 
      ) : (
        <span>No Books Found</span>
      )}
    </>
  )
}

export default BookSearchResults