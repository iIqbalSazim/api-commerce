import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

import {
  StyledModal,
  StyledModalOverlay,
} from "../../../../Shared/Components/Modal/ModalStyles";

export const StyledConfirmDeleteModalOverlay = styled(StyledModalOverlay)`
  background-color: rgba(0, 0, 0, 0.573);
`;

export const StyledConfirmDeleteModal = styled(StyledModal)`
  max-height: 20rem;
  height: 14rem;
  max-width: 18rem;
  margin-top: 10rem;
  flex-direction: column;
  padding: 2rem;
  @media screen and (min-width: 510px) {
    height: 16rem;
    max-width: 25rem;
  }
`;

export const StyledCloseCrossIcon = styled(AiOutlineClose)`
  position: absolute;
  right: 0;
  top: 0;
  margin: 1rem;
  border-radius: 0.3rem;
  &:hover {
    cursor: pointer;
    background-color: rgba(219, 217, 217, 0.259);
  }
  color: black;
`;

export const StyledTitle = styled.h1`
  font-size: 1rem;
  font-family: inherit;
  flex-grow: 1;
  margin-right: 0.5rem;
  @media screen and (min-width: 510px) {
    font-size: 1.4rem;
  }
`;

export const StyledButtonsWrapper = styled.div`
  width: 100%;
  padding-top: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 1rem;
`;

export const StyledButton = styled.button`
  background-color: rgb(227, 83, 83);
  color: white;
  font-weight: 500;
  border: 0;
  padding: 0.7rem 0.6rem;
  border-radius: 0.2rem;
  &:hover {
    cursor: pointer;
    background-color: rgb(190, 69, 69);
  }
  &:active {
    background-color: rgb(168, 61, 61);
  }
  font-size: 0.7rem;

  @media screen and (min-width: 510px) {
    font-size: 0.8rem;
  }
`;

export const StyledGoBackButton = styled(StyledButton)`
  background-color: rgb(86, 94, 213);
  &:hover {
    background-color: rgb(78, 86, 195);
  }
  &:active {
    background-color: rgb(69, 76, 175);
  }
`;
