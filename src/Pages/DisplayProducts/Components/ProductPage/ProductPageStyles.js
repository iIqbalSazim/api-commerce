import styled from "styled-components";

export const StyledProductPageSection = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 15rem;
`;

export const StyledProductSection = styled.section`
  margin: 4rem 1rem 2rem 1rem;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  align-items: left;

  @media screen and (min-width: 800px) {
    gap: 5rem;
    flex-direction: row;
  }
`;

export const StyledProductPageImage = styled.img`
  max-height: 22rem;
  max-width: 18rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

  @media screen and (min-width: 600px) {
    max-height: 22rem;
    max-width: 25rem;
  }

  @media screen and (min-width: 800px) {
    min-height: 22rem;
    max-height: 30rem;
    max-width: 30rem;
  }
`;

export const StyledProductPageProductDetails = styled.div`
  max-width: 40rem;
  word-wrap: break-word;
`;

export const StyledProductPageTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;

  @media screen and (min-width: 800px) {
    font-size: 1.8rem;
  }
`;

export const StyledProductCategory = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  padding-bottom: 0.3rem;

  @media screen and (min-width: 800px) {
    padding-bottom: 0.5rem;
    font-size: 1rem;
  }
`;

export const StyledProductDescription = styled.p`
  font-size: 0.8rem;

  @media screen and (min-width: 800px) {
    font-size: 1rem;
  }
`;

export const StyledProductStats = styled.div`
  font-size: 0.9rem;
  padding-top: 0.5rem;

  @media screen and (min-width: 800px) {
    font-size: 1.2rem;
    padding-top: 5rem;
  }
`;

export const StyledProductRating = styled.p`
  display: flex;
  align-items: center;
`;
