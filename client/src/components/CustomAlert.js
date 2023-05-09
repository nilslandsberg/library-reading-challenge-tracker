import React from 'react';
import { Alert } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const CustomAlert = ({ message }) => {
  const authMessage = useSelector((state) => state.authMessage.message)
  return (
    <Alert variant="danger" className="custom-alert">
      {authMessage ? authMessage : message}
    </Alert>
  );
};

export default CustomAlert;