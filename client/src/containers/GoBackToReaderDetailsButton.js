import { Container } from "react-bootstrap"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"

const GoBackToReaderDetailsButton = () => {
  const reader = useSelector((state) => state.readerDetails.readerDetails);

  return (
    <Container className="d-flex justify-content-center">
      <Link to={`/readers/${reader._id}`} className="btn btn-secondary">
        Go Back
      </Link>
    </Container>
  )
}

export default GoBackToReaderDetailsButton