import { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap"
import ModalContext from "../contexts/ModalContext";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateReadingTimeAction } from "../features/readerDetailsSlice";
import ReaderContext from "../contexts/ReaderContext";

const ReaderTimeLogForm = () => {
  const reader = useContext(ReaderContext);
  const readingTime = reader.readingTime
 
  const [ selectedWeek, setSelectedWeek ] = useState("0");
  const [ value, setValue ] = useState(readingTime[selectedWeek]);

  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const handleHideModal = useContext(ModalContext);
  
  const handleWeekSelect = (event) => {
    setSelectedWeek(event.target.value);
  }

  // update the 'value' when the selectedWeek state changes - this displays the corresponding value with the selected week in the form
  useEffect(() => {
    setValue(readingTime[selectedWeek]);
  }, [readingTime, selectedWeek]);

  const handleFormSubmit = () => {
    const requestBody = {
      readerId: reader._id,
      weekIndex: selectedWeek,
      readingTime: value
    }
    dispatch(updateReadingTimeAction(requestBody));
    handleHideModal();
  }

  const handleIncrement = () => {
    setValue(value + 30);
  }

  const handleDecrement = () => {
    if (value > 0) {
      setValue(value - 30);
    }
  }

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <Form.Label>Select Week</Form.Label>
      <Form.Select className="mb-3" onChange={handleWeekSelect}>
        <option value="0">Week 1</option>
        <option value="1">Week 2</option>
        <option value="2">Week 3</option>
        <option value="3">Week 4</option>
        <option value="4">Week 5</option>
        <option value="5">Week 6</option>
      </Form.Select>
      <Form.Group className="d-flex align-items-center">
        <div className="flex-grow-1">
          <Form.Label>How Many Minutes Did You Read This Week?</Form.Label>
          <div className="input-group">
            <Form.Control type="number" value={value} {...register("time")} readOnly />
            <Button variant="outline-secondary" onClick={handleIncrement}>+</Button>
            <Button variant="outline-secondary" onClick={handleDecrement}>-</Button>
          </div>
        </div>
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form> 
  )
}

export default ReaderTimeLogForm