import { useState } from "react"
import { Carousel, FloatingLabel, Form, Image } from "react-bootstrap";
import batman from '../files/avatars/4043232_avatar_batman_comics_hero_icon.svg';
import smilingBoy from '../files/avatars/4043235_afro_boy_child_kid_icon.svg';
import spikedHairBoy from '../files/avatars/4043236_avatar_boy_male_portrait_icon.svg';
import screamingAvocado from '../files/avatars/4043237_avatar_avocado_food_scream_icon.svg';
import hatBoy from '../files/avatars/4043238_avatar_boy_kid_person_icon.svg';
import cactusPirate from '../files/avatars/4043242_avatar_cacti_cactus_pirate_icon.svg';
import coffeeZorro from '../files/avatars/4043245_avatar_coffee_cup_zorro_icon.svg';
import sloth from '../files/avatars/4043272_avatar_lazybones_sloth_sluggard_icon.svg';
import { useForm } from "react-hook-form";


const AddReaderForm = () => {
  const [ selectedAvatar, setSelectedAvatar ] = useState(batman);
  const { register, handleSubmit, reset } = useForm();

  const avatars = [ 
    {
      label: "Batman",
      path: batman
    },
    {
      label: "Smiling Boy",
      path: smilingBoy
    },
    {
      label: "Spiked Hair Boy",
      path: spikedHairBoy
    },
    {
      label: "Screaming Avocado",
      path: screamingAvocado
    },
    {
      label: "Hat Boy",
      path: hatBoy
    },
    {
      label: "Cactus Pirate",
      path: cactusPirate
    },
    {
      label: "Coffee Zorro",
      path: coffeeZorro
    },
    {
      label: "Sloth",
      path: sloth
    },
  ];

  const handleFormSubmit = (data) => {

  }

  return (
    <>
      <Form onSumbit={handleSubmit(handleFormSubmit)}>
        <Carousel 
          activeIndex={avatars.findIndex((avatar) => avatar.path === selectedAvatar)}
          onSelect={(selectedIndex) => setSelectedAvatar(avatars[selectedIndex].path)}
          style={{ marginTop: "20px" }}
          interval={null}
          slide={true}
          wrap={false}
          indicators={false}
        >
          {avatars.map((avatar, index) => (
            <Carousel.Item key={index}>
              <img className="selected-avatar" src={avatar.path} alt={avatar.label} />
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
      </Form>
    </>
  );
}

export default AddReaderForm