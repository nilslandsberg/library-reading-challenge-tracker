import { Container } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { fetchBookRecommendationsByAgeGroupAction } from "../../features/bookRecommendationSlice";

const GoBackToReaderDetailsButton = () => {
  const reader = useSelector((state) => state.readerDetails.readerDetails);

  const dispatch = useDispatch()

  const handleClick = () => {
    const age = reader.age.toLowerCase();
    dispatch(fetchBookRecommendationsByAgeGroupAction(age))
  }

  return (
    <Container className="d-flex justify-content-center">
      <Link to={`/readers/${reader._id}`} onClick={handleClick} className="btn btn-secondary">
        Go Back
      </Link>
    </Container>
  )
}

export default GoBackToReaderDetailsButton