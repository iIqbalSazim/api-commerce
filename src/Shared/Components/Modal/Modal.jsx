import {
  StyledModalOverlay,
  StyledModal,
  StyledCloseCrossIcon,
  StyledTitle,
} from "./ModalStyles";

const Modal = ({ children, onClose, title }) => {
  return (
    <>
      <StyledModalOverlay>
        <StyledModal>
          <StyledCloseCrossIcon onClick={onClose} />
          <StyledTitle>{title}</StyledTitle>
          {children}
        </StyledModal>
      </StyledModalOverlay>
    </>
  );
};

export default Modal;
