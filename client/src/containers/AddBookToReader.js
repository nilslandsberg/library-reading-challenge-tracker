import { Button, Dropdown, Form, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addBookToReaderAction } from "../features/readerDetailsSlice";
import { useState } from "react";
import { useForm } from "react-hook-form";

const AddBookToReader = ({ book }) => {
  const userReaders = useSelector((state) => state.userReaders.readers);
  const [selectedReader, setSelectedReader] = useState();
  const { handleSubmit, reset } = useForm();

  const dispatch = useDispatch();

  const handleSelect = (user) => {
    setSelectedReader(user);
  };

  const handleAddBook = () => {
    const requestBody = {
      id: selectedReader._id,
      title: book.title,
      authors: book.authors,
      pageCount: book.pageCount.toString(),
      description: book.description,
      imageUrl: book.imageLinks.thumbnail,
      isbn: book.industryIdentifiers[0].identifier
    };
    dispatch(addBookToReaderAction(requestBody));
    reset();
    // dispatch(fetchReaderDetailsAction(selectedReader._id));
    // navigate('/readers/' + selectedReader._id);
  };

  return (
    <div className="d-flex align-items-center mt-3">
      <InputGroup>
        <Dropdown className="me-2">
          <Dropdown.Toggle variant="outline-dark" id="search-type-dropdown">
            Select Reader
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {userReaders && userReaders.length > 0 ? (
              userReaders.map((user) => (
                <Dropdown.Item key={user._id} onClick={() => handleSelect(user)}>
                  {user.name}
                </Dropdown.Item>
              ))
            ) : (
              <div></div>
            )}
          </Dropdown.Menu>
        </Dropdown>
          <Form.Control
            className="input-reader-field"
            type="text"
            defaultValue={selectedReader ? selectedReader.name : ""}
            readOnly
            required
          />
        <Button className="add-book-btn" type="submit" onClick={handleSubmit(handleAddBook)}>
          Add Book To Reader's List
        </Button>
      </InputGroup>
    </div>
  );
};

export default AddBookToReader;
