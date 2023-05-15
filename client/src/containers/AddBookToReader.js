import { useState } from "react"
import { Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";

const AddBookToReader = ({ book }) => {
  const userReaders = JSON.parse(localStorage.getItem('userReaders'));
  const [ selectedReader, setSelectedReader ] = useState();
  console.log(book)
  const handleSelect = (name, id) => {
    const requestBody = {
      title: book.title,
      author: book.authors,
      pages: book.pageCount,
      description: book.description,
      imageUrl: book.imageLinks.thumbnail,
    }
    console.log(id);
    console.log(requestBody)
  }

  console.log(selectedReader)

  return  (
    <Dropdown>
      <Dropdown.Toggle variant="outline-dark" id="search-type-dropdown">
        Select Reader
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {userReaders && userReaders.length > 0 ? userReaders.map((user) => (
          <Dropdown.Item key={user._id} onClick={() => handleSelect(user.name, user._id)}>{user.name}</Dropdown.Item>
        )) : <div></div>}
      </Dropdown.Menu>
    </Dropdown>  
  )
}

export default AddBookToReader