import ModalContext from "../contexts/ModalContext";
import { Button } from "react-bootstrap";
import { useState } from "react";

import ReaderTimeLogModal from "./ReaderTimeLogModal";

const ReaderTimeLogButton = () => {
  const [ showModal, setShowModal ] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  }

  const handleHideModal = () => {
    setShowModal(false);
  }


  return (
    <ModalContext.Provider value={handleHideModal}>
      <Button
        className="log-reading-time-btn"
        variant="secondary" 
        onClick={handleShowModal}
      >
        Record/Edit Reading Time
      </Button>
      <ReaderTimeLogModal showModal={showModal} handleCloseModal={handleHideModal} />
    </ModalContext.Provider>
  )
}

export default ReaderTimeLogButton