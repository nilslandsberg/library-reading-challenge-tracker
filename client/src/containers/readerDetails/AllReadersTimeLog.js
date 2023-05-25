import { useSelector } from "react-redux";
import { toHoursAndMinutes } from "../../services/toHoursAndMinutes";

const AllReadersTimeLog = () => {
  const username = useSelector((state) => state.userAuth.user);
  const readers = useSelector((state) => state.userReaders.readers);
 
  // create an array of the total reading time for each reader
  const readerTotalReadingTime = readers.map(reader => reader.readingTime.reduce((total, elementValue) => {
    return total + elementValue;
    }, 0));

  // find the sum of reading time for all readers
  const allReadersTotalReadingTime = readerTotalReadingTime.reduce((total, elementValue) => {
    return total + elementValue;
  }, 0);

  return (
    <>
      <h3>{username} Household Time Log</h3>
      <h4 className="text-end">Total Time: {toHoursAndMinutes(allReadersTotalReadingTime)}</h4>
    </>
  )
}

export default AllReadersTimeLog