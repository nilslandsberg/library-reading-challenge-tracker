import { Button } from "react-bootstrap"
import { useNavigate } from "react-router"

const CheckAvailabilityButton = ({ book }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // convert book title and authors into search parameters for the local library website
    const searchParameters = book.title.toLowerCase().split(' ').join('%20') + '%20' + book.authors[0].toLowerCase().split(' ').join('%20');
    console.log(searchParameters)
    const librarySearchUrl = `https://vienna.tlcdelivers.com/?config=default#section=search&term=${searchParameters}&page=0&sortKey=Relevancy&db=ls2pac&branchFilters=[%221%22,%222%22]&facetFilters=[]&audience=[]`
    window.open(librarySearchUrl, "_blank");
  }
  return (
    <Button variant="secondary" onClick={handleClick}>Is This Book At My Library?</Button>
  )
}

export default CheckAvailabilityButton