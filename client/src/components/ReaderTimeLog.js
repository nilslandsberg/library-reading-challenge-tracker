import { useContext } from "react"
import { Col, Row } from "react-bootstrap"
import ReaderTimeLogModal from "./ReaderTimeLogModal";
import ReaderTimeLogButton from "./ReaderTimeLogButton";
import ReaderContext from "../contexts/ReaderContext";
import ReaderTimeLogChart from "./ReaderTimeLogChart";

const ReaderTimeLog = () => {
  const reader = useContext(ReaderContext)
  
  return (
    <>
      <h2>{reader.name}'s Time Log</h2>
      <Col md={4}>
        <ReaderTimeLogButton />
        <ReaderTimeLogModal /> 
        <ReaderTimeLogChart />
      </Col>
    </>
  )
}

export default ReaderTimeLog