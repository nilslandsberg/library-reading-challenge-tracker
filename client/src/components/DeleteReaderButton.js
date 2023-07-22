import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import ReaderContext from "../contexts/ReaderContext";
import { useDispatch } from "react-redux";
import { deleteReaderAction } from "../features/readerSlice";
import { useNavigate } from "react-router";

const DeleteReaderButton = () => {
  const reader = useContext(ReaderContext);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = async (reader) => {
    const confirmation = window.confirm("Are you sure you want to delete this reader?");
    if (confirmation) {
      await dispatch(deleteReaderAction(reader._id));
      navigate('/');
    }
  }

  // delete icon description
  const deleteCardTooltip = (
    <Tooltip id="delete-card-tooltip">
      Delete Reader
    </Tooltip>
  );

  return (
    <OverlayTrigger placement="top" overlay={deleteCardTooltip}>
      <FontAwesomeIcon className="delete-reader-btn" onClick={() => handleDelete(reader)} icon={faTrashCan} />
    </OverlayTrigger>
  )
}


export default DeleteReaderButton