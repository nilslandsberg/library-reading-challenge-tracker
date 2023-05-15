import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

const MyReaders = () => {
  const userReaders = useSelector((state) => state.userReaders.readers);
  const dispatch = useDispatch();

  useEffect(() => {
    // Load userReaders from Local Storage on component mount
    const storedUserReaders = localStorage.getItem('userReaders');
    if (storedUserReaders) {
      dispatch({ type: 'userReaders/setReaders', payload: JSON.parse(storedUserReaders) });
    }
  }, [dispatch]);

  useEffect(() => {
    // Save userReaders to Local Storage whenever it changes
    localStorage.setItem('userReaders', JSON.stringify(userReaders));
  }, [userReaders]);

  return (
    <>
      {userReaders && userReaders.length > 0 ? (
        <>
          {userReaders.map((reader, index) => (
            <Card className="reader-card text-center" key={reader._id}>
              <Card.Header as="h3">{reader.name}</Card.Header>
              <Card.Img className="mb-2" src={reader.avatar} variant="top" />
              <Card.Title>
                Age: {reader.age}
              </Card.Title>
              <Card.Body>
                Books Read: {reader.books.length}
              </Card.Body>
            </Card>
          ))}
        </>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default MyReaders;
