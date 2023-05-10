import { Card } from "react-bootstrap"
import { useSelector } from "react-redux"

const MyReaders = () => {
  const userReaders = useSelector((state) => state.userReaders.readers)
  console.log(userReaders)
  return (
    <>
      {userReaders && userReaders.length > 0 ? (
        <>
          {userReaders.map((reader, index) => (
            <Card className="reader-card" key={reader._id} style={{ width: '18rem' }}>
              <Card.Img src={reader.avatar} variant="top" />
              <Card.Body>
                {reader.name}
              </Card.Body>
              <Card.Body>
                {reader.age}
              </Card.Body>
            </Card>
          ))}
        </>
      ) : (
        <div></div>
      )}
    </>
  )
}

export default MyReaders