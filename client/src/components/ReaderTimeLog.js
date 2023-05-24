import { useContext } from "react"
import { Col } from "react-bootstrap"
import ReaderTimeLogModal from "./ReaderTimeLogModal";
import ReaderTimeLogButton from "./ReaderTimeLogButton";
import ReaderContext from "../contexts/ReaderContext";


const ReaderTimeLog = () => {
  const reader = useContext(ReaderContext)

  const totalTime = reader.readingTime.reduce((total, elementValue) => {
    return total + elementValue;
  });

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
      <h2>{reader.name}'s Time Log</h2>
      <h2 className="text-end">Total Time: {toHoursAndMinutes(totalTime)}</h2>
      <Col md={4}>
        <ReaderTimeLogButton />
        <ReaderTimeLogModal /> 
      </Col>
    </>
  )
}

export default ReaderTimeLog