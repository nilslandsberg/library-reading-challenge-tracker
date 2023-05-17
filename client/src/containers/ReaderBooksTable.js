import { Table } from "react-bootstrap";

const ReaderBooksTable = ({ books, reader }) => {

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Number</th>
          <th>Book Title</th>
          <th>Author(s)</th>
          <th>Pages</th>
        </tr>
      </thead>
      <tbody>
        {books && books.length > 0 ? (
          books.map((book, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{book.title}</td>
              <td>{book.authors[0]}</td>
              <td>{book.pages}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4">{reader.name} needs to start reading!</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default ReaderBooksTable;
