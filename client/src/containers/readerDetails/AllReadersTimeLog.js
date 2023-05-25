import { useSelector } from "react-redux";
import { toHoursAndMinutes } from "../../services/toHoursAndMinutes";

const AllReadersTimeLog = () => {
  const username = useSelector((state) => state.userAuth.user);
  const readers = useSelector((state) => state.userReaders.readers);
 
  // create an array of the total reading time for each reader
  const readerTotalReadingTime = readers && readers.length > 0
    ? readers.map(reader => reader.readingTime.reduce((total, elementValue) => {
        return total + elementValue;
      }, 0))
    : null;

  // find the sum of reading time for all readers
  const allReadersTotalReadingTime = readerTotalReadingTime !== null
    ? readerTotalReadingTime.reduce((total, elementValue) => {
        return total + elementValue;
      }, 0)
    : null;

  return (
    <>
      {!readers || readers.length === 0 ? (
        <h4>Add Readers to Your Household</h4>
      ) : (
        <>
          <h3>{username} Household Time Log</h3>
          <h4 className="text-end">
            Total Time: {toHoursAndMinutes(allReadersTotalReadingTime)}
          </h4>
        </>
      )}
    </>
  );
};

export default AllReadersTimeLog;
