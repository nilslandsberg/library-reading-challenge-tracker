import { useContext, useState } from "react"
import { Button, Carousel, FloatingLabel, Form, Image } from "react-bootstrap";
import batman from '../files/avatars/4043232_avatar_batman_comics_hero_icon.svg';
import smilingBoy from '../files/avatars/4043235_afro_boy_child_kid_icon.svg';
import spikedHairBoy from '../files/avatars/4043236_avatar_boy_male_portrait_icon.svg';
import screamingAvocado from '../files/avatars/4043237_avatar_avocado_food_scream_icon.svg';
import hatBoy from '../files/avatars/4043238_avatar_boy_kid_person_icon.svg';
import cactusPirate from '../files/avatars/4043242_avatar_cacti_cactus_pirate_icon.svg';
import coffeeZorro from '../files/avatars/4043245_avatar_coffee_cup_zorro_icon.svg';
import sloth from '../files/avatars/4043272_avatar_lazybones_sloth_sluggard_icon.svg';
import ponyTailGirl from '../files/avatars/4043250_avatar_child_girl_kid_icon.svg';
import pigTailGirl from '../files/avatars/4043252_child_girl_kid_person_icon.svg';
import zombie from '../files/avatars/4043266_avatar_dead_monster_zombie_icon.svg';
import alien from '../files/avatars/4043268_alien_avatar_space_ufo_icon.svg';
import harleyQuinn from '../files/avatars/4043270_avatar_joker_squad_suicide_woman_icon.svg';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addReaderAction } from "../features/readerSlice";
import ModalContext from "../contexts/ModalContext";


const AddReaderForm = () => {
  const [ selectedAvatar, setSelectedAvatar ] = useState(ponyTailGirl);
  const { register, handleSubmit, reset } = useForm();
  const handleCloseModal = useContext(ModalContext)

  const dispatch = useDispatch();

  // avatars from 'https://www.iconfinder.com/iconsets/avatars-xmas-giveaway' pack by Laura Reen
  const avatars = [ 
    ponyTailGirl, 
    pigTailGirl, 
    hatBoy, 
    smilingBoy, 
    spikedHairBoy, 
    batman, 
    harleyQuinn, 
    screamingAvocado, 
    cactusPirate, 
    coffeeZorro, 
    sloth, 
    zombie, 
    alien
  ];

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