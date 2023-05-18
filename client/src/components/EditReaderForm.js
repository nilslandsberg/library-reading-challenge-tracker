import { useContext, useState } from "react";
import ModalContext from "../contexts/ModalContext";
import ReaderContext from "../contexts/ReaderContext";
import avatars from "./AvatarData";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Button, Carousel, FloatingLabel, Form, Image } from "react-bootstrap";
import { updateReaderAction } from "../features/readerSlice";
import UpdateReaderContext from "../contexts/UpdateReaderContext";

const EditReaderForm = () => {
  const reader = useContext(ReaderContext);
  const handleCloseModal = useContext(ModalContext);
  const handleUpdatedReader = useContext(UpdateReaderContext);
  const [ selectedAvatar, setSelectedAvatar ] = useState(() =>
    avatars.findIndex((avatar) => avatar === reader.avatar)
  );
  const { register, handleSubmit, reset } = useForm();

  const dispatch = useDispatch();

  const handleFormSubmit = (data) => {
    const requestBody = {
      id: reader._id,
      name: data.name,
      age: data.age,
      avatar: avatars[selectedAvatar]
    };
    dispatch(updateReaderAction(requestBody));
    const updatedRequest = {...requestBody};
    console.log(updatedRequest);
    handleUpdatedReader(updatedRequest);
    handleCloseModal();
    reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Carousel
          activeIndex={selectedAvatar}
          onSelect={(selectedIndex) => setSelectedAvatar(selectedIndex)}
          style={{ marginTop: "20px" }}
          interval={null}
          slide={true}
          wrap={false}
          indicators={false}
        >
          {avatars.map((avatar, index) => (
            <Carousel.Item key={index}>
              <Image className="selected-avatar" src={avatar} alt="No Image Available" />
            </Carousel.Item>
          ))}
        </Carousel>

        <h5 className="text-center">Select Avatar</h5>

        <FloatingLabel
          controlId="formBasicFirstName"
          className="mb-3"
          label={
            <span>
              <span className="red-required">* </span>
              Name
            </span>
          }
        >
          <Form.Control
            type="text"
            defaultValue={reader.name}
            {...register("name")}
            required
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="formBasicAge"
          className="mb-3"
          label={
            <span>
              <span className="red-required">* </span>
              Age
            </span>
          }
        >
          <Form.Control
            type="number"
            defaultValue={reader.age}
            {...register("age")}
            required
          />
        </FloatingLabel>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default EditReaderForm;
