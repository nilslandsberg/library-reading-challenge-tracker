import { useState } from "react";
import { Button, Col, Dropdown, Form, InputGroup, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { searchBooksByTitle } from "../features/bookSearchSlice";

const SearchForBooks = () => {
  const [searchType, setSearchType] = useState("Keyword");
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const handleTypeSelect = (type) => {
    setSearchType(type);
  };

  const handleFormSubmit = (data) => {
    // take search value, make it lowercase and prepare it to be entered into request parameter
    const searchValue = data.searchValue.toLowerCase().split(' ').join('+');
 
    if (searchType === 'Keyword') {
      console.log('Keyword');
    } else if (searchType === 'Author') {
      console.log('Author')
    } else {
      console.log(searchValue)
      dispatch(searchBooksByTitle(searchValue))
    }
  };

  return (
    <>
      <Row className="book-search justify-content-center" as="h3">
        Book Search
      </Row>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Row className="justify-content-center">
          <Col sm={9}>
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
          </Col>
          <Col sm={3}>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default SearchForBooks;
