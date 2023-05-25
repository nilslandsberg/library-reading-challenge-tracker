import { Col, Container, Image, Row } from "react-bootstrap";

const ReaderReviews = ({ book }) => {
  // function to format timestamp of recommendations
  const updatedTimestamp = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    })
  }
  
  return (
    <Container>
      {book.recommendations.map((recommendation, index) => (
        <div key={recommendation._id}>
          <Row className="d-flex align-items-center justify-content-center">
            <Col md={2}>
              <Row className="d-flex justify-content-center">
                { recommendation.readerId ? <Image className="user-circle" src={recommendation.readerId.avatar} alt="user avatar" /> : null }
                
              </Row>
              <Row className="d-flex align-content-center">
                
                <h6 className="text-center">{recommendation.readerId ? recommendation.readerId.name : "Anonymous User"}</h6>
              </Row>
            </Col>
            <Col>
              <Row className="d-flex align-items-center mb-3">
                <Col>
                  <em>{recommendation.text}</em>
                </Col>
              </Row>
              <Row className="d-flex align-items-center">
                <Col className="text-end">
                  <h6>Reviewed on: {updatedTimestamp(recommendation.timestamp)}</h6>
                </Col>
              </Row>
            </Col>
          </Row>
          {index !== book.recommendations.length - 1 && <hr />} {/* Render <hr /> if it's not the last recommendation */}
        </div>
      ))}
    </Container>
  );
  
};

export default ReaderReviews;
