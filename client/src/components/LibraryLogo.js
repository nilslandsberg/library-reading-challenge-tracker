import { Image, Row } from "react-bootstrap"

const LibraryLogo = () => {
  const handleClick = () => {
    const libraryUrl = "https://viennapubliclibrary.org";

    window.open(libraryUrl, "_blank");
  }
  return (
    <Row className="d-flex justify-content-center mt-4">
      <Image className="library-logo" onClick={handleClick} src="https://vienna.tlcdelivers.com/storedimage/8694184" alt="Vienna Public Library Logo" />
    </Row>
  )
}

export default LibraryLogo