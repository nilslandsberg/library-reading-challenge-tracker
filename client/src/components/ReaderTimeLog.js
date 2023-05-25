import { useContext } from "react"
import { Col } from "react-bootstrap"
import ReaderTimeLogModal from "./ReaderTimeLogModal";
import ReaderTimeLogButton from "./ReaderTimeLogButton";
import ReaderContext from "../contexts/ReaderContext";
import { useSelector } from "react-redux";


const ReaderTimeLog = () => {
  const reader = useSelector((state) => state.readerDetails.readerDetails)
  const updatedReader = useContext(ReaderContext)

  const totalTime = reader.readingTime
  ? reader.readingTime.reduce((total, elementValue) => {
      return total + elementValue;
    }, 0)
  : reader.readingTime.reduce((total, elementValue) => {
      return total + elementValue;
    }, 0);

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    if (minutes > 0) {
      return hours + " hours and " +  minutes + " minutes";
    } else {
      return hours + " hours";
    }
  }

  return (
    <>
      <h3>{updatedReader.name}'s Time Log</h3>
      <h4 className="text-end">Total Time: {toHoursAndMinutes(totalTime)}</h4>
      <Col md={4}>
        <ReaderTimeLogButton />
        <ReaderTimeLogModal /> 
      </Col>
    </>
  )
}

export default ReaderTimeLog