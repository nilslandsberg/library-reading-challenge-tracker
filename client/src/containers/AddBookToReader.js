import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector} from "react-redux";
import { addBookToReaderAction } from "../features/readingChallengeSlice";

const AddBookToReader = ({ book }) => {
  const userReaders = useSelector((state) => state.userReaders.readers)

  const dispatch = useDispatch();

  const handleSelect = (id) => {
    const requestBody = {
      id: id,
      title: book.title,
      authors: book.authors,
      pageCount: book.pageCount.toString(),
      description: book.description,
      imageUrl: book.imageLinks.thumbnail,
    };
    dispatch(addBookToReaderAction(requestBody));
  }

  return  (
    <Dropdown>
      <Dropdown.Toggle variant="outline-dark" id="search-type-dropdown">
        Select Reader
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {userReaders && userReaders.length > 0 ? userReaders.map((user) => (
          <Dropdown.Item key={user._id} onClick={() => handleSelect(user._id)}>{user.name}</Dropdown.Item>
        )) : <div></div>}
      </Dropdown.Menu>
    </Dropdown>  
  )
}

export default AddBookToReader