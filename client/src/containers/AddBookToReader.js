import { useState } from "react"
import { Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";

const AddBookToReader = () => {
  const userReaders = JSON.parse(localStorage.getItem('userReaders'));
  const [ selectedReader, setSelectedReader ] = useState();

  const handleSelect = (name, id) => {
    setSelectedReader(name);
    console.log(id);
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