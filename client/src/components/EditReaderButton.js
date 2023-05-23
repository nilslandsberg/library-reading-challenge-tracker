import EditReaderModal from "../components/EditReaderModal";
import ModalContext from "../contexts/ModalContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useContext, useState } from "react";
import ReaderContext from "../contexts/ReaderContext";

const EditReaderButton = () => {
  const [ showModal, setShowModal ] = useState(false);
  const reader = useContext(ReaderContext);

  const handleShowModal = () => {
    setShowModal(true);
  }

  const handleHideModal = () => {
    setShowModal(false);
  }

  const editReaderTooltip = (
    <Tooltip id="edit-reader-tooltip">
      Edit Reader Details
    </Tooltip>
  );

  return (
    <ModalContext.Provider value={handleHideModal}>
      <OverlayTrigger placement="top" overlay={editReaderTooltip}>
        <FontAwesomeIcon
          className="edit-reader-btn"
          icon={faPencil} 
          onClick={handleShowModal}
        />
      </OverlayTrigger>
      <EditReaderModal showModal={showModal} handleCloseModal={handleHideModal} reader={reader}/>
    </ModalContext.Provider>
  )
}

export default EditReaderButton