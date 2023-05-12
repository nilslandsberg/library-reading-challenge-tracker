import { useState } from "react";
import { Button, Dropdown, Form, InputGroup, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const SearchForBooks = () => {
  const [searchType, setSearchType] = useState("Keyword");
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const handleTypeSelect = (type) => {
    setSearchType(type);
  };

  const handleFormSubmit = (data) => {
    if (searchType === 'Keyword') {
      console.log('Keyword');
    } else if (searchType === 'Author') {
      console.log('Author')
    } else {
      console.log('Title')
    }
  };

  return (
    <>
      <Row className="book-search justify-content-center" as="h3">
        Book Search
      </Row>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <InputGroup>
          <Dropdown>
            <Dropdown.Toggle variant="outline-dark" id="search-type-dropdown">
              {searchType}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleTypeSelect("Keyword")}>
                Keyword
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleTypeSelect("Title")}>
                Title
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleTypeSelect("Author")}>
                Author
              </Dropdown.Item>
              {/* Add more dropdown items for different search types */}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            type="text"
            placeholder={`Search by ${searchType}`}
            {...register("searchValue", { required: true })}
          />
        </InputGroup>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
    </>
  );
};

export default SearchForBooks;
