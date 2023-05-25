import { Container, Image, Row } from "react-bootstrap";
import readingChallengeLogo from "../files/images/reading_challenge_logo.png";

const NonAuthView = () => {
  return (
    <>
      <Container className="d-flex justify-content-center mb-3">
        <Image className="challenge-logo" src={readingChallengeLogo} fluid />
      </Container>
      <Container>
        <Row className="d-flex justify-content-center">
          <h4 className="text-center">
            Create an account for your household and track all of the reading done in your home this summer.
          </h4>
        </Row>
      </Container>
    </>
  );
};

export default NonAuthView;
