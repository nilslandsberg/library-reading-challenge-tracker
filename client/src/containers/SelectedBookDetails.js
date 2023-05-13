import { useSelector } from "react-redux"
import { useParams } from "react-router";

const SelectedBookDetails = () => {
  const books = useSelector((state) => state.bookSearchResults.books)

    // logic to find book in books array by matching the identifier in the url params
  const { identifier } = useParams();
  const isBook = b => b.industryIdentifiers[0].identifier === identifier;
  const book = books.find(isBook);
  console.log(book);

  return (
    <h1>Book Details Here</h1>
  )
}

export default SelectedBookDetails