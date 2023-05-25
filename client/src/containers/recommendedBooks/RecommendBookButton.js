import { useState } from "react";
import { Button } from "react-bootstrap";
import ModalContext from "../../contexts/ModalContext";
import RecommendBookModal from './RecommendBookModal';

const RecommendBookButton = ({ book }) => {
  const [ showModal, setShowModal ] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  }

  const handleHideModal = () => {
    setShowModal(false);
  }

  return (
    <>
    <ModalContext.Provider value={{ handleHideModal, book }}>
      <Button variant="secondary" onClick={handleShowModal}>Recommend Book</Button>
      <RecommendBookModal showModal={showModal} handleCloseModal={handleHideModal} />
    </ModalContext.Provider>
    </>
  )
}

export default RecommendBookButton