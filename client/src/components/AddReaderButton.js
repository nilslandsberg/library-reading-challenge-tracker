import { useState } from "react"
import { Button } from "react-bootstrap"
import AddChildModal from "./AddReaderModal";

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
    <Button onClick={handleShowModal}>+ Add Reader</Button>
    <AddChildModal showModal={showModal} handleCloseModal={handleCloseModal} />
    </span>
  )
}

export default AddReaderButton