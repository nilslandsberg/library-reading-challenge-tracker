import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchReaderDetailsAction } from '../features/readerDetailsSlice';
import LoadingSpinner from '../components/LoadingSpinner';

const MyReaders = () => {
  const userReaders = useSelector((state) => state.userReaders.readers);
  const isLoading = useSelector((state) => state.userReaders.isLoading);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = async(id) => {
    await dispatch(fetchReaderDetailsAction(id));
    navigate('/readers/' + id);
  }

  
  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {userReaders && userReaders.length > 0 ? (
            <>
              {userReaders.map((reader, index) => (
                <div key={reader._id} className="reader-card-link">
                  <Card className="reader-card text-center" key={reader._id} onClick={() => handleClick(reader._id)}>
                    <Card.Header as="h3">{reader.name}</Card.Header>
                    <Card.Img className="mb-2" src={reader.avatar} variant="top" />
                    <Card.Title>
                      Age: {reader.age}
                    </Card.Title>
                    <Card.Body>
                      Books Read: {reader.books.length}
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </>
          ) : (
            <div></div>
          )}
        </>
      )}
    </>
  );
};

export default MyReaders;
