import Modal from "../Modal/Modal";
import {
  StyledCloseButton,
  StyledButtonsSection,
  StyledForm,
  StyledSubmitButton,
} from "./FormModalStyles";

const FormModal = ({ children, onClose, title, formSubmit }) => {
  return (
    <>
      <Modal onClose={onClose} title={title}>
        <StyledForm onSubmit={formSubmit}>
          {children}
          <StyledButtonsSection>
            <StyledCloseButton onClick={onClose}>Go back</StyledCloseButton>
            <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
          </StyledButtonsSection>
        </StyledForm>
      </Modal>
    </>
  );
};

export default FormModal;
