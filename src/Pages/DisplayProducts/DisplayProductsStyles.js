import styled from "styled-components";

export const StyledGridWrapper = styled.main`
  display: grid;
  margin: 6rem 7rem;
  grid-template-columns: 1fr;
  row-gap: 3rem;
  justify-items: center;

  @media screen and (min-width: 600px) {
    row-gap: 5rem;
    grid-template-columns: 1fr 1fr;
    column-gap: 2.25rem;
  }

  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 2rem;
  }

  @media screen and (min-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 2rem;
  }

  @media screen and (min-width: 1250px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 2.5rem;
  }
`;
