import { Modal } from "react-bootstrap"
import AddReaderForm from "./AddReaderForm";


const AddReaderModal = ({ showModal, handleCloseModal }) => {
  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Create New Reader</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddReaderForm />
      </Modal.Body>
    </Modal>
  );
};

export default AddReaderModal