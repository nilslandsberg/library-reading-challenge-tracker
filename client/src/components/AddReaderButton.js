import { useState } from "react"
import { Button } from "react-bootstrap"
import AddChildModal from "./AddReaderModal";
import ModalContext from "../contexts/ModalContext";

const AddReaderButton = () => {
  const [ showModal, setShowModal ] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  }
  
  const handleCloseModal = () => {
    setShowModal(false);
  }

  return (
    <span>
      <ModalContext.Provider value={handleCloseModal}>
        <Button onClick={handleShowModal} variant="secondary">+ Add Reader</Button>
        <AddChildModal showModal={showModal} handleCloseModal={handleCloseModal} />
      </ModalContext.Provider>
    </span>
  )
}

export default AddReaderButton