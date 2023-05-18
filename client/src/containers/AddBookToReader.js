import { Button, Dropdown, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addBookToReaderAction, fetchReaderDetailsAction } from "../features/readerDetailsSlice";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const AddBookToReader = ({ book }) => {
  const userReaders = useSelector((state) => state.userReaders.readers);
  const [selectedReader, setSelectedReader] = useState();
  const { register, handleSubmit, reset } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelect = (user) => {
    setSelectedReader(user);
    console.log(user);
  };

  const handleAddBook = () => {
    const requestBody = {
      id: selectedReader._id,
      title: book.title,
      authors: book.authors,
      pageCount: book.pageCount.toString(),
      description: book.description,
      imageUrl: book.imageLinks.thumbnail,
    };
    dispatch(addBookToReaderAction(requestBody));
    dispatch(fetchReaderDetailsAction(selectedReader._id));
    navigate('/readers/' + selectedReader._id);
  };

  return (
    <div className="d-flex align-items-center">
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
      <Form className="me-2">
        <Form.Control
          type="text"
          defaultValue={selectedReader ? selectedReader.name : ""}
          {...register("name")}
          required
        />
      </Form>
      <Button className="add-book-btn" type="submit" onClick={handleSubmit(handleAddBook)}>
        Add Book To Reader's List
      </Button>
    </div>
  );
};

export default AddBookToReader;
