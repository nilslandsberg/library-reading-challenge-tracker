import { useEffect, useState } from "react";
import { Button, Col, Dropdown, Form, InputGroup, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { searchBooksByAuthor, searchBooksByKeyword, searchBooksByTitle, setSearchResults } from "../features/bookSearchSlice";
import BookSearchResults from "../containers/BookSearchResults";

const SearchForBooks = () => {
  // local state for selected search style
  const [searchType, setSearchType] = useState("Keyword");
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const handleTypeSelect = (type) => {
    setSearchType(type);
  };

  const handleFormSubmit = (data) => {
    // take search value, make it lowercase and prepare it to be entered into request parameter
    const searchValue = data.searchValue.toLowerCase().split(' ').join('+');
    // logic to dipatch search based on selected search type
    if (searchType === 'Keyword') {
      dispatch(searchBooksByKeyword(searchValue));
    } else if (searchType === 'Author') {
      dispatch(searchBooksByAuthor(searchValue));
    } else {
      dispatch(searchBooksByTitle(searchValue));
    }
    reset();
  };

  return (
    <>
      <Row className="book-search justify-content-center" as="h3">
        Find A Book To Add To Your Reading Log
      </Row>
      <Row className="book-search-form justify-content-center">
        <Form onSubmit={handleSubmit(handleFormSubmit)}>
          <Row className="justify-content-center">
            <Col sm={6}>
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
          </Row>
          <Row className="mt-3 justify-content-center">
            <Col sm={6} className="d-flex justify-content-center">
              <Button variant="primary" type="submit">
                Search
              </Button>
            </Col>
          </Row>
        </Form>
      </Row>
      <hr />
      <BookSearchResults />
    </>
  );
};

export default SearchForBooks;
