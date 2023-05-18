import { Modal } from "react-bootstrap";
import EditReaderForm from "./EditReaderForm";

const EditReaderModal = ({ showModal, handleCloseModal }) => {
  return (
    <Modal show={showModal} onHide={handleCloseModal}> 
      <Modal.Header closeButton>
        <Modal.Title>Edit Reader</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EditReaderForm />
      </Modal.Body>
    </Modal>
  );
};

export default EditReaderModal;
