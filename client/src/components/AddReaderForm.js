import { useContext, useState } from "react"
import { Button, Carousel, FloatingLabel, Form, Image } from "react-bootstrap";
import baby from "../files/avatars/4043239_baby_child_kid_toddler_icon.svg";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addReaderAction } from "../features/readerSlice";
import ModalContext from "../contexts/ModalContext";
import avatars from "./AvatarData";


const AddReaderForm = () => {
  const [ selectedAvatar, setSelectedAvatar ] = useState(baby);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const handleCloseModal = useContext(ModalContext)

  const dispatch = useDispatch();

  const handleFormSubmit = (data) => {
    const requestBody = {
      name: data.name,
      age: data.age,
      avatar: selectedAvatar
    };
    dispatch(addReaderAction(requestBody));
    handleCloseModal();
    reset();
  }

  return (
    <>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Carousel 
          activeIndex={avatars.findIndex((avatar) => avatar === selectedAvatar)}
          onSelect={(selectedIndex) => setSelectedAvatar(avatars[selectedIndex])}
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
        
        <FloatingLabel controlId="formBasicFirstName" className="mb-3" label={
          <span>
            <span className="red-required">* </span>
            First Name
          </span>
        }>
          <Form.Control
            type="text"
            placeholder="First Name"
            {...register("name", { maxLength: 13 })} // Apply maxLength validation
            required
          />
          {errors.name?.type === "maxLength" && (
            <span className="text-danger">Maximum 13 characters allowed.</span>
          )}
        </FloatingLabel>

        <FloatingLabel controlId="formBasicAge" className="mb-3" label={
          <span>
            <span className="red-required">*</span>
            Age Range
          </span>
        }>
          <Form.Select {...register("age")} required>
            <option value="">Select age range</option>
            <option value="Baby">Baby (0-2)</option>
            <option value="Child">Child (3-12)</option>
            <option value="Teen">Teen (13-18)</option>
            <option value="Adult">Adult (18+)</option>
          </Form.Select>
        </FloatingLabel>
        <Button type="submit" variant="secondary">Submit</Button>
      </Form>
    </>
  );
}

export default AddReaderForm