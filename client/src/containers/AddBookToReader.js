import { Button, Form, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addBookToReaderAction } from "../features/readerDetailsSlice";
import { useForm } from "react-hook-form";

const AddBookToReader = ({ book }) => {
  const userReaders = useSelector((state) => state.userReaders.readers);
  const { handleSubmit, register, reset } = useForm();

  const dispatch = useDispatch();

  const handleAddBook = (data) => {
    const requestBody = {
      id: data.reader,
      title: book.title,
      authors: book.authors,
      pageCount: book.pageCount.toString(),
      description: book.description,
      imageUrl: book.imageLinks.thumbnail,
      isbn: book.industryIdentifiers[0].identifier,
    };
    dispatch(addBookToReaderAction(requestBody));
    reset();
  };

  return (
    <div className="d-flex align-items-center mt-3">
      <InputGroup>
        <Form.Select
          className=""
          {...register("reader", { required: true })}
        >
          <option value="">Select Reader</option>
          {userReaders && userReaders.length > 0 ? (
            userReaders.map((user) => (
              <option key={user._id} value={user._id}>
                {user.name}
              </option>
            ))
          ) : (
            <option disabled>No readers available</option>
          )}
        </Form.Select>
        <Button
          className="add-book-btn"
          type="submit"
          onClick={handleSubmit(handleAddBook)}
        >
          Add Book To Reader's List
        </Button>
      </InputGroup>
    </div>
  );
};

export default AddBookToReader;
