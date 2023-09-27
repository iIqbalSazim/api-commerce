import styled from "styled-components";

export const StyledProductPageSection = styled.section`
  display: flex;
  flex-direction: column;
`;

export const StyledProductSection = styled.section`
  margin: 6rem 0 2rem 0;
  gap: 5rem;
  display: flex;
`;

export const StyledProductPageImage = styled.img`
  min-height: 20rem;
  max-width: 30rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;

export const StyledProductPageProductDetails = styled.div`
  max-width: 40rem;
`;

export const StyledProductPageTitle = styled.h1`
  font-weight: 600;
  font-size: 2rem;
`;

export const StyledProductCategory = styled.p`
  font-size: 1rem;
  padding-bottom: 0.5rem;
`;

export const StyledProductDescription = styled.p`
  font-size: 1rem;
`;

export const StyledProductStats = styled.div`
  font-size: 1.2rem;
  padding-top: 5rem;
`;

export const StyledProductRating = styled.p`
  display: flex;
  align-items: center;
`;
