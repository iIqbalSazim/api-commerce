import styled from "styled-components";

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

export const StyledButtonsSection = styled.section`
  display: flex;
  justify-content: right;
  gap: 0.7rem;
  padding: 1.4rem 0 1.5rem 0;
  margin: 0.5rem 0;

  @media screen and (min-width: 600px) {
    gap: 1rem;
    padding: 1.4rem 0;
  }
`;

export const StyledFormButton = styled.button`
  padding: 0.5rem;
  border: 0;
  font-size: 0.8rem;
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
export const StyledFormValidationError = styled.p`
  padding: 0;
  margin: 0.1rem 0;
  font-size: 0.7rem;
  font-weight: 500;
  color: red;
  width: 12rem;

  @media screen and (min-width: 510px) {
    width: 25rem;
  }
`;
