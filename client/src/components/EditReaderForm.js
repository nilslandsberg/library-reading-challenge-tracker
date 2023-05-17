import { useContext } from "react";
import ModalContext from "../contexts/ModalContext";
import ReaderContext from "../contexts/ReaderContext"

const EditReaderForm = () => {
  const handleCloseModal = useContext(ModalContext);
  const reader = useContext(ReaderContext);
  console.log(reader)

  const handleSubmit = () => {
    // Perform form submission logic
    // Once the form is submitted or canceled, close the modal
    handleCloseModal();
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Your form content */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default EditReaderForm;