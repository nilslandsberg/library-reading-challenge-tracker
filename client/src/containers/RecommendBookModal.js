import { Modal } from "react-bootstrap";
import RecommendBookForm from "./RecommendBookForm";
import ModalContext from "../contexts/ModalContext";
import { useContext } from "react";

const RecommendBookModal = ({ showModal, handleCloseModal }) => {
  const { book } = useContext(ModalContext);

  return (
    <Modal show={showModal} onHide={handleCloseModal}> 
      <Modal.Header closeButton>
        <Modal.Title>Recommend {book.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <RecommendBookForm />
      </Modal.Body>
    </Modal>
  );
};

export default RecommendBookModal;