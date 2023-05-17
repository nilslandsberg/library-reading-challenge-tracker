import { Button } from "react-bootstrap"

const CheckAvailabilityButton = ({ book }) => {

  const handleClick = () => {
    // convert book title and authors into search parameters for the local library website
    const bookTitle = book.title.toLowerCase().split(' ').join('%20');
    const bookAuthors = book.authors[0].toLowerCase().split(' ').join('%20');

    const searchParameters = bookTitle + '%20' + bookAuthors;
    
    // insert search parameters into library search url
    const librarySearchUrl = `https://vienna.tlcdelivers.com/?config=default#section=search&term=${searchParameters}&page=0&sortKey=Relevancy&db=ls2pac&branchFilters=[%221%22,%222%22]&facetFilters=[]&audience=[]`

    // open the librarySearchUrl in a new browswer tab
    window.open(librarySearchUrl, "_blank");
  }
  return (
    <Button variant="secondary" onClick={handleClick}>Is This Book At My Library?</Button>
  )
}

export default CheckAvailabilityButton