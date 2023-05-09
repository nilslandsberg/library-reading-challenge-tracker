import { Button, Modal } from "react-bootstrap"
import AddReaderForm from "./addReaderForm";

const AddReaderModal = ({ showModal, handleCloseModal }) => {
  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Create New Reader</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddReaderForm />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleCloseModal}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddReaderModal