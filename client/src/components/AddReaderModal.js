import { Button, Modal } from "react-bootstrap"
import AddReaderForm from "./AddReaderForm";


const AddReaderModal = ({ showModal, handleCloseModal }) => {
  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Create New Reader</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddReaderForm />
        {/* <h1>Where are my things?</h1>
        <p>Put stuff here</p> */}
      </Modal.Body>
      {/* <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleCloseModal}>
          Save Changes
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
};

export default AddReaderModal