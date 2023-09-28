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
  position: relative;
`;

export const StyledDotsButton = styled.button`
  background-color: transparent;
  color: rgb(67, 67, 67);
  border: 0;
  position: absolute;
  top: 0.5rem;
  right: 0.3rem;
  padding: 0 0.1rem;
  margin: 0.2rem;
  font-size: 1.2rem;
  border-radius: 1rem;
  transform: rotate(-90deg);

  &:hover {
    cursor: pointer;
    color: rgb(0, 0, 0);
    background-color: rgba(234, 234, 234, 0.156);
  }
`;

export const StyledActionButtonsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 8rem;
  position: absolute;
  top: 2rem;
  right: 0.4rem;
  z-index: 5;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
`;

export const StyledActionButton = styled.button`
  border: 0;
  padding: 0.2rem 0.75rem;
  background-color: white;
  &:hover {
    background-color: rgba(212, 212, 212, 0.338);
    cursor: pointer;
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
  max-width: 16rem;
`;

export const StyledProductTitle = styled.p`
  font-weight: 600;
  padding-top: 1rem;
  font-size: 1.1rem;
  word-wrap: break-word;
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
