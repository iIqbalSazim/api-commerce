import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const StyledAddProductWrapper = styled.div`
  display: flex;
  justify-content: right;
  width: 80rem;
`;

export const StyledAddNewProductButton = styled.button`
  margin: 3rem 0 0 0;
  border-radius: 0.2rem;
  border: 0;
  padding: 0.7rem 1rem;
  font-size: 1.05rem;
  background-color: rgb(96, 96, 97);
  color: white;
  border: 0;
  cursor: pointer;
`;

export const StyledFormModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  z-index: 10;
`;

export const StyledFormModal = styled.div`
  background-color: white;
  max-height: 40rem;
  margin-top: 3rem;
  border-radius: 0.3rem;
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const StyledCloseCrossIcon = styled(AiOutlineClose)`
  position: absolute;
  right: 0;
  top: 0;
  margin: 1rem;
  &:hover {
    cursor: pointer;
  }
  color: black;
`;

export const StyledTitle = styled.h1`
  font-size: 2rem;
  margin: 0;
  padding-top: 0.6rem;
`;

export const StyledForm = styled.form`
  display: grid;
  grid-template-rows: auto;
  row-gap: 0.2rem;
  padding: 0rem 6rem;
  font-family: inherit;
`;

export const StyledLabel = styled.label`
  padding-top: 1.4rem;
`;

export const StyledInput = styled.input`
  width: 25rem;
  height: 1.5rem;
`;

export const StyledSelect = styled.select`
  width: 25rem;
  height: 1.5rem;
`;

export const StyledTextArea = styled.textarea`
  width: 25rem;
  font-family: inherit;
`;

export const StyledButtonsSection = styled.section`
  display: flex;
  justify-content: right;
  gap: 2rem;
  padding-top: 3rem;
`;

export const StyledFormButton = styled.button`
  padding: 0.7rem;
  font-size: 1rem;
  border: 0;
  border-radius: 0.2rem;

  &:hover {
    cursor: pointer;
  }
`;

export const StyledCloseButton = styled(StyledFormButton)`
  background-color: rgb(247, 102, 102);
  color: white;
`;

export const StyledSubmitButton = styled(StyledFormButton)`
  background-color: rgb(79, 156, 189);
  color: white;
`;
