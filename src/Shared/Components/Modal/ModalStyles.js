import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const StyledModalOverlay = styled.div`
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

export const StyledModal = styled.div`
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

export const StyledTitle = styled.h1`
  font-size: 1.6rem;
  margin: 0;
  padding: 3rem 0 1rem 0;

  @media screen and (min-width: 600px) {
    font-size: 2rem;
  }
`;
