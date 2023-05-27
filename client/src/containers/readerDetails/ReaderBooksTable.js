import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchReaderDetailsAction, removeBooksFromReaderAction } from "../../features/readerDetailsSlice";

const ReaderBooksTable = ({ updatedReader }) => {
  const readerDetails = useSelector((state) => state.readerDetails.readerDetails);
  const reader = updatedReader;
  
  const books = readerDetails.books;

  const [selectedBooks, setSelectedBooks] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleClick = async (identifier) => {
    const id = reader._id
    await dispatch(fetchReaderDetailsAction(id));
    navigate(`/readers/${reader._id}/book/` + identifier)
  }

  return (
    <Table striped bordered hover className="reader-book-table">
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
              <td className="book-title" onClick={() => handleClick(book.isbn)}>
                {book.title}
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
