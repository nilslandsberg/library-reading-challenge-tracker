import { useSelector } from 'react-redux';
import LoadingSpinner from '../components/LoadingSpinner';
import ReaderCard from '../components/ReaderCard';

const MyReaders = () => {
  const userReaders = useSelector((state) => state.userReaders.readers);
  const isLoading = useSelector((state) => state.userReaders.isLoading);

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
                  <ReaderCard reader={reader}/>
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
