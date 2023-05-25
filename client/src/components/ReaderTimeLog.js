import { useContext } from "react"
import { Col } from "react-bootstrap"
import ReaderTimeLogModal from "./ReaderTimeLogModal";
import ReaderTimeLogButton from "./ReaderTimeLogButton";
import ReaderContext from "../contexts/ReaderContext";
import { useSelector } from "react-redux";
import { toHoursAndMinutes } from "../services/toHoursAndMinutes";


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