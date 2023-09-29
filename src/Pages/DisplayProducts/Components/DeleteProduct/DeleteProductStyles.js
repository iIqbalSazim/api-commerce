import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

import {
  StyledFormModal,
  StyledFormModalOverlay,
} from "../AddProduct/AddProductStyles";

export const StyledConfirmDeleteModalOverlay = styled(StyledFormModalOverlay)`
  background-color: rgba(0, 0, 0, 0.573);
`;

export const StyledConfirmDeleteModal = styled(StyledFormModal)`
  max-height: 20rem;
  max-width: 25rem;
  height: 16rem;
  margin-top: 10rem;
  flex-direction: column;
  padding: 2rem;
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
  font-size: 1.4rem;
  font-family: inherit;
  flex-grow: 1;
  margin-right: 0.5rem;
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
