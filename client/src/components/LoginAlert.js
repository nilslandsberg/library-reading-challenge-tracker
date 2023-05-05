import React from 'react';
import { Alert } from 'react-bootstrap';

const LoginAlert = ({ message }) => {
  return (
    <Alert variant="danger" className="custom-alert">
      {message}
    </Alert>
  );
};

export default LoginAlert;