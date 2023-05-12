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
  )
}

export default MyReaders