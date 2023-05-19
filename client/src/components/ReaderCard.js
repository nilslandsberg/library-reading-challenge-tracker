import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { fetchReaderDetailsAction } from "../features/readerDetailsSlice";

const ReaderCard = ({ reader }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = async(id) => {
    await dispatch(fetchReaderDetailsAction(id));
    navigate('/readers/' + id);
  }

  return (
      <Card className="reader-card text-center" onClick={() => handleClick(reader._id)}>
        <Card.Header as="h3">{reader.name}</Card.Header>
        <Card.Img className="mb-2" src={reader.avatar} variant="top" />
        <Card.Title>
          {reader.age}
        </Card.Title>
      </Card> 
  );
};

export default ReaderCard;
