import { useContext, useState } from "react";
import ModalContext from "../contexts/ModalContext";
import ReaderContext from "../contexts/ReaderContext";
import avatars from "./AvatarData";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Button, Carousel, FloatingLabel, Form, Image } from "react-bootstrap";
import { updateReaderAction } from "../features/readerSlice";
import UpdateReaderContext from "../contexts/UpdateReaderContext";
import { fetchBookRecommendationsByAgeGroupAction } from "../features/bookRecommendationSlice";

const EditReaderForm = () => {
  const updatedReader = useContext(ReaderContext);
  const handleCloseModal = useContext(ModalContext);
  const handleUpdatedReader = useContext(UpdateReaderContext);
  const [ selectedAvatar, setSelectedAvatar ] = useState(() =>
    avatars.findIndex((avatar) => avatar === updatedReader.avatar)
  );
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const dispatch = useDispatch();
  console.log(updatedReader._id)
  const handleFormSubmit = async (data) => {
    const requestBody = {
      _id: updatedReader._id,
      name: data.name,
      age: data.age,
      avatar: avatars[selectedAvatar]
    };

    await dispatch(updateReaderAction(requestBody))
    // change age range to lower case for fetchBookRecommendationsByAgeGroupAction
    const age = data.age.toLowerCase();
    dispatch(fetchBookRecommendationsByAgeGroupAction(age));

    const updatedRequest = {...requestBody};
    // pass updatedRequest through handleUpdatedReader function to update reader details for ReaderDetails component
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
            placeholder="First Name"
            defaultValue={updatedReader.name}
            {...register("name", { maxLength: 13 })} // Apply maxLength validation
            required
          />
          {errors.name?.type === "maxLength" && (
            <span className="text-danger">Maximum 13 characters allowed.</span>
          )}
        </FloatingLabel>
        <FloatingLabel
          controlId="formBasicAge"
          className="mb-3"
          maxLength="13"
          label={
            <span>
              <span className="red-required">* </span>
              Age Range
            </span>
          }
        >
          <Form.Select defaultValue={updatedReader.age} {...register("age")} required>
            <option value="">Select age range</option>
            <option value="Baby">Baby (0-2)</option>
            <option value="Child">Child (3-12)</option>
            <option value="Teen">Teen (13-18)</option>
            <option value="Adult">Adult (18+)</option>
          </Form.Select>
        </FloatingLabel>
        <Button type="submit" variant="secondary">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default EditReaderForm;
