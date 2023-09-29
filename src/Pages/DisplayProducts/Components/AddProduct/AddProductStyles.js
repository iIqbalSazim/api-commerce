import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const StyledAddProductWrapper = styled.div`
  display: flex;
  justify-content: right;
  width: 18rem;
  @media screen and (min-width: 600px) {
    width: 33rem;
  }
  @media screen and (min-width: 800px) {
    width: 47rem;
  }
  @media screen and (min-width: 1100px) {
    width: 65rem;
  }
  @media screen and (min-width: 1250px) {
    width: 75rem;
  }
`;

export const StyledAddNewProductButton = styled.button`
  padding: 0.6rem 0.8rem;
  font-size: 1rem;
  margin: 3rem 0 0 0;
  border-radius: 0.2rem;
  border: 0;
  background-color: rgb(96, 96, 97);
  color: white;
  border: 0;
  cursor: pointer;

  @media screen and (min-width: 600px) {
    padding: 0.7rem 1rem;
    font-size: 1.05rem;
  }
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
  height: fit-content;
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

export const StyledForm = styled.form`
  display: grid;
  grid-template-rows: auto;
  row-gap: 0.2rem;
  padding: 0 2.5rem;
  font-family: inherit;

  @media screen and (min-width: 600px) {
    padding: 0rem 4rem;
  }
  @media screen and (min-width: 800px) {
    padding: 0rem 6rem;
  }
`;

export const StyledTitle = styled.h1`
  font-size: 1.6rem;
  margin: 0;
  padding: 3rem 0 1rem 0;

  @media screen and (min-width: 600px) {
    font-size: 2rem;
  }
`;

export const StyledLabel = styled.label`
  padding-top: 0.35rem;
  font-weight: 500;
  font-size: 0.8rem;

  @media screen and (min-width: 510px) {
    font-size: 1rem;
    padding-top: 0.6rem;
  }
`;

export const StyledInput = styled.input`
  width: 12rem;
  height: 1.5rem;

  @media screen and (min-width: 510px) {
    width: 25rem;
  }
`;

export const StyledSelect = styled.select`
  width: 12rem;
  height: 1.5rem;

  @media screen and (min-width: 510px) {
    width: 25rem;
  }
`;

export const StyledTextArea = styled.textarea`
  width: 12rem;
  font-family: inherit;

  @media screen and (min-width: 510px) {
    width: 25rem;
  }
`;

export const StyledButtonsSection = styled.section`
  display: flex;
  justify-content: right;
  gap: 0.7rem;
  padding: 1.4rem 0 0.5rem 0;
  margin: 0.5rem 0;

  @media screen and (min-width: 600px) {
    gap: 1rem;
    padding: 1.4rem 0;
  }
`;

export const StyledFormButton = styled.button`
  padding: 0.5rem;
  border: 0;
  font-size: 0.7rem;
  border-radius: 0.2rem;

  &:hover {
    cursor: pointer;
  }
  @media screen and (min-width: 600px) {
    font-size: 1rem;
    padding: 0.8rem;
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

export const StyledFormValidationError = styled.p`
  padding: 0;
  margin: 0.1rem 0;
  font-size: 0.7rem;
  font-weight: 500;
  color: red;
`;
