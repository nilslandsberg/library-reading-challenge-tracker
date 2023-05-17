import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import ReaderBooksTable from "./ReaderBooksTable";
import { useState } from "react";
import EditReaderModal from "../components/EditReaderModal";
import ModalContext from "../contexts/ModalContext";
import ReaderContext from "../contexts/ReaderContext";


const ReaderDetails = () => {
  const readers = useSelector((state) => state.userReaders.readers);
  const [ showModal, setShowModal ] = useState(false)

  // logic to find book in books array by matching the identifier in the url params
  const { readerId } = useParams();
  const isReader = (r) => r._id === readerId;
  const reader = readers.find(isReader);

  // logic to calculate total number of pages read by the reader
  const totalPages = parseInt(reader.books.reduce((total, book) => total + book.pages, 0));

  const handleShowModal = () => {
    setShowModal(true);
    console.log('click')
  }

  const handleHideModal = () => {
    setShowModal(false);
  }

  return (
    <Container>
      <Row className="justify-content-center"> 
        <Col lg={6} className="mb-3">
          <h3>Total Books Read: {reader.books.length}</h3>
          <h3>Total Number of Pages Read: {totalPages}</h3>
          <ReaderBooksTable books={reader.books} reader={reader} />
        </Col>
        <Col lg={6} className="mt-3 d-flex justify-content-center">
          <Card className="reader-card text-center">
            <Card.Header as="h3">{reader.name}</Card.Header>
            <Card.Img
              className="reader-avatar mb-2"
              src={reader.avatar}
              variant="top"
            />
            <Card.Title>Age: {reader.age}</Card.Title>
            <Card.Footer>
              <ReaderContext.Provider value={reader}>
                <ModalContext.Provider value={handleHideModal}>
                  <Button variant="link" onClick={handleShowModal}>Edit Reader</Button>
                  <EditReaderModal showModal={showModal} handleCloseModal={handleHideModal} reader={reader}/>
                </ModalContext.Provider>
              </ReaderContext.Provider>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ReaderDetails;
