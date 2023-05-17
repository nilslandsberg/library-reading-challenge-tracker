import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MyReaders = () => {
  const userReaders = useSelector((state) => state.userReaders.readers);

  return (
    <>
      {userReaders && userReaders.length > 0 ? (
        <>
          {userReaders.map((reader, index) => (
            <Link to={`/readers/${reader._id}`} key={reader._id} className="reader-card-link">
              <Card className="reader-card text-center">
                <Card.Header as="h3">{reader.name}</Card.Header>
                <Card.Img className="mb-2" src={reader.avatar} variant="top" />
                <Card.Title>
                  Age: {reader.age}
                </Card.Title>
                <Card.Body>
                  Books Read: {reader.books.length}
                </Card.Body>
              </Card>
            </Link>
          ))}
        </>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default MyReaders;
