import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import ReaderContext from "../contexts/ReaderContext";
import ReaderBooksTable from "./ReaderBooksTable";
import EditReaderButton from "../components/EditReaderButton";
import DeleteReaderButton from "../components/DeleteReaderButton";
import { useEffect, useState } from "react";
import UpdateReaderContext from "../contexts/UpdateReaderContext";
import { fetchReaderDetailsAction } from "../features/readerDetailsSlice";
import LoadingSpinner from "../components/LoadingSpinner";
import RecommendedBooksForReader from "./RecommendedBooksForReader";

const ReaderDetails = () => {
  const reader = useSelector((state) => state.readerDetails.readerDetails);
  const isLoading = useSelector((state) => state.readerDetails.isLoading);

  const dispatch = useDispatch();

  const { readerId } = useParams();

  const [ updatedReader, setUpdatedReader ] = useState(reader);

  const handleUpdatedReader = (readerUpdate) => {
    setUpdatedReader(readerUpdate);
  };

  useEffect(() => {
    const fetchData = async () => {
      // Dispatch the fetch action only if the reader state is empty
      if (!reader || Object.keys(reader).length === 0) {
        await dispatch(fetchReaderDetailsAction(readerId));
      }
    };

    fetchData();
    setUpdatedReader(reader);
  }, [dispatch, readerId, reader]);

  const totalPages = reader && reader.books ? reader.books.reduce((total, book) => total + Number(book.pages), 0) : 0;

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {reader && Object.keys(reader).length > 0 && (
            <>
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
                        <Card.Title>{updatedReader.age}</Card.Title>
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
                    <h3>{updatedReader.name}'s Books</h3>
                    <ReaderBooksTable updatedReader={updatedReader}/>
                    <div className="text-end">
                      <h5>Total Books Read: {reader.books.length}</h5>
                      <h5>Total Number of Pages Read: {totalPages}</h5>
                    </div>
                  </Col>
                </Row>
              </Container>
              <hr />
              <RecommendedBooksForReader />
            </>
          )}
        </>
      )}
    </>
  );
};

export default ReaderDetails;
