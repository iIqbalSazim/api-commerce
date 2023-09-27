import styled from "styled-components";

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
