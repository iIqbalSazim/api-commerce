import styled from "styled-components";

export const StyledProductCard = styled.div`
  min-height: 32rem;
  height: fit-content;
  background-color: rgb(255, 255, 255);
  width: 16rem;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 60px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`;

export const StyledProductImage = styled.img`
  height: 15rem;
  padding: 1rem;
  object-fit: scale-down;
  border-radius: inherit;
`;

export const StyledProductDetailsWrapper = styled.section`
  padding: 0.1rem 1.3rem;
  flex-grow: 1;
`;

export const StyledProductTitle = styled.h1`
  font-weight: 500;
  padding-top: 1rem;
`;

export const StyledProductBuyNowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 2rem;
`;

export const StyledPrice = styled.h3`
  font-weight: 500;
`;

export const StyledBuyNowButton = styled.button`
  padding: 0.7rem 1rem;
  font-size: 1.05rem;
  background-color: rgb(82, 86, 98);
  color: white;
  border: 0;

  &:hover {
    background-color: rgb(63, 65, 73);
    cursor: pointer;
  }

  &:active {
    background-color: rgb(41, 43, 48);
  }
`;
