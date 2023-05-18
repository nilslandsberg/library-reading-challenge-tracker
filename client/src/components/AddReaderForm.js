import { useContext, useState } from "react"
import { Button, Carousel, FloatingLabel, Form, Image } from "react-bootstrap";
import ponyTailGirl from '../files/avatars/4043250_avatar_child_girl_kid_icon.svg';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addReaderAction } from "../features/readerSlice";
import ModalContext from "../contexts/ModalContext";
import avatars from "./AvatarData";


const AddReaderForm = () => {
  const [ selectedAvatar, setSelectedAvatar ] = useState(ponyTailGirl);
  const { register, handleSubmit, reset } = useForm();
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
          <Form.Control type="text" placeholder="First Name" {...register("name")} required />
        </FloatingLabel>
        <FloatingLabel controlId="formBasicAge" className="mb-3" label={
              <span>
                <span className="red-required">* </span>
                Age
              </span>
            }>
              <Form.Control type="number" placeholder="Age" {...register("age")} required />
        </FloatingLabel>
        <Button type="submit" variant="primary">Submit</Button>
      </Form>
    </>
  );
}

export default AddReaderForm