import { Modal } from "react-bootstrap";
import ReaderTimeLogForm from "../containers/readerDetails/ReaderTimeLogForm";

const ReaderTimeLogModal = ({ showModal, handleCloseModal }) => {
  return (
    <Modal show={showModal} onHide={handleCloseModal}> 
      <Modal.Header closeButton>
        <Modal.Title>Record Reading Time</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ReaderTimeLogForm />
      </Modal.Body>
    </Modal>
  );
};

export default ReaderTimeLogModal;
