// function to display multiple authors separated by a comma and a space
const multipleAuthors = (book) => {
  return book.authors.length > 1 ? book.authors.join(", ") : book.authors;
}

export default multipleAuthors;