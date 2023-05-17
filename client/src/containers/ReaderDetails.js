import { Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import ReaderContext from "../contexts/ReaderContext";
import ReaderBooksTable from "./ReaderBooksTable";
import EditReaderButton from "../components/EditReaderButton";
import DeleteReaderButton from "../components/DeleteReaderButton";
import { useState } from "react";
import UpdateReaderContext from "../contexts/UpdateReaderContext";

const ReaderDetails = () => {
  const readers = useSelector((state) => state.userReaders.readers);
  
  const { readerId } = useParams();
  const isReader = (r) => r._id === readerId;
  const reader = readers.find(isReader);

  const [updatedReader, setUpdatedReader] = useState(reader);

  const handleUpdatedReader = (readerUpdate) => {
    setUpdatedReader(readerUpdate);
  };

  const totalPages = reader.books.reduce((total, book) => total + Number(book.pages), 0);

  return (
    <Container>
      <Row className="justify-content-center"> 
        <Col lg={3} className="mt-3 d-flex justify-content-center">
          <UpdateReaderContext.Provider value={handleUpdatedReader}>
            <Card className="reader-details-card text-center">
              <Card.Header as="h3">{updatedReader.name}</Card.Header>
              <Card.Img
                className="reader-avatar mb-2"
                src={updatedReader.avatar}
                variant="top"
              />
              <Card.Title>Age: {updatedReader.age}</Card.Title>
              <Card.Footer className="d-flex justify-content-between">
                <ReaderContext.Provider value={updatedReader}>
                  <div>
                    <EditReaderButton />
                  </div>
                  <div>
                    <DeleteReaderButton />
                  </div>
                </ReaderContext.Provider>
              </Card.Footer>
            </Card>
          </UpdateReaderContext.Provider>
        </Col>
        <Col lg={9} className="mb-3">
          <h3>Total Books Read: {reader.books.length}</h3>
          <h3>Total Number of Pages Read: {totalPages}</h3>
          <ReaderBooksTable books={reader.books} reader={reader} />
        </Col>
      </Row>
    </Container>
  );
};

export default ReaderDetails;
