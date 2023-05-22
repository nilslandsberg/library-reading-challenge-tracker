import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { removeBooksFromReaderAction } from "../features/readerDetailsSlice";

const ReaderBooksTable = ({ updatedReader }) => {
  const reader = updatedReader;
  
  const books = reader.books;

  const [selectedBooks, setSelectedBooks] = useState([]);

  const dispatch = useDispatch();

  const handleBookSelection = (bookId) => {
    setSelectedBooks((prevSelectedBooks) => {
      if (prevSelectedBooks.includes(bookId)) {
        return prevSelectedBooks.filter((id) => id !== bookId);
      } else {
        return [...prevSelectedBooks, bookId];
      }
    });
  };

  const handleDelete = () => {
    const requestBody = {
      readerId: reader._id,
      bookIds: selectedBooks
    }
    dispatch(removeBooksFromReaderAction(requestBody));
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Book Title</th>
          <th>Author(s)</th>
          <th>Pages</th>
          <th className="text-center">
            <FontAwesomeIcon icon={ faTrashCan } />
          </th>
        </tr>
      </thead>
      <tbody>
        {books && books.length > 0 ? (
          books.map((book, index) => (
            <tr key={index}>
              <td className="book-title">
                <Link className="book-link" to={`/readers/${reader._id}/book/${book.isbn}`}>
                  {book.title}
                </Link>
              </td>
              <td>{book.authors[0]}</td>
              <td>{book.pages}</td>
              <td className="text-center">
                <input
                  type="checkbox"
                  checked={selectedBooks.includes(book._id)}
                  onChange={() => handleBookSelection(book._id)}
                />
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4">{reader.name} needs to start reading!</td>
          </tr>
        )}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="4" className="text-end">
            <Button variant="secondary" onClick={handleDelete} disabled={selectedBooks.length === 0}>
              Delete Selected Books
            </Button>
          </td>
        </tr>
      </tfoot>
    </Table>
  );
};

export default ReaderBooksTable;
