import { useContext } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import ModalContext from "../contexts/ModalContext";

const RecommendBookForm = () => {
  const reader = useSelector((state) => state.readerDetails.readerDetails);
  const { handleCloseModal, book } = useContext(ModalContext);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const dispatch = useDispatch();

  const handleFormSubmit = (data) => {
    const requestBody = {
      title: book.title,
      authors: book.authors,
      pages: book.pages,
      description: book.description,
      imageUrl: book.imageUrl,
      isbn: book.isbn,
      ageGroup: data.ageGroup,
      recommendation: data.recommendation,
      readerId: reader._id
    };
    console.log(requestBody);
    handleCloseModal();
    reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <FloatingLabel controlId="formBasicRecommendation" className="mb-3" label={
          <span>
            <span className="red-required">* </span>
            What do you like about this {book.title}?
          </span>
        }>
          <Form.Control
            as="textarea"
            rows={6}
            {...register("recommendation", { minLength: 20 })}
            required
          />
          {errors.recommendation?.type === "minLength" && (
            <span className="text-danger">A minimum of 20 characters is required.</span>
          )}
        </FloatingLabel>
        <FloatingLabel controlId="formBasicAgeGroup" label={
          <span>
            <span className="red-required">*</span>
            Age Group
          </span>
        }>
          <Form.Select className="mb-3" {...register("ageGroup")} required>
            <option value="">Select an age group</option>
            <option value="baby">Baby</option>
            <option value="child">Child</option>
            <option value="teen">Teen</option>
            <option value="adult">Adult</option>
          </Form.Select>
        </FloatingLabel>
        <Button type="submit" variant="primary">Submit Recommendation</Button>
      </Form>
    </>
  );
};

export default RecommendBookForm;
