import { Button, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const GoBackToSearchResultsButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  }

  return (
    <Container className="d-flex justify-content-center">
      <Button onClick={handleGoBack} className="btn btn-secondary">
        Go Back
      </Button>
    </Container>
  )
}

export default GoBackToSearchResultsButton