import styled from "styled-components";

export const StyledProductsGrid = styled.main`
  display: grid;
  margin: 6rem 7rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 5rem;
  column-gap: 4rem;
  justify-items: center;
`;

export const StyledProductCard = styled.div`
  height: fit-content;
  background-color: ash;
  width: 20rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 0.1rem;
`;

export const StyledProductImage = styled.img`
  height: 10rem;
  width: inherit;
  border-radius: inherit;
  object-fit: cover;
`;

export const StyledProductDetailsWrapper = styled.section`
  padding: 0.1rem 1.3rem;
`;

export const StyledProductTitle = styled.h1`
  font-weight: 500;
`;

export const StyledProductBuyNowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledBuyNowButton = styled.button`
  padding: 0.7rem 1rem;
  font-size: 1.05rem;
  background-color: rgb(82, 86, 98);
  color: white;
  border: 0;
`;
