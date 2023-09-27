import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: black;
  color: white;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const StyledTitleWrapper = styled.section`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 80rem;
`;

export const StyledTitle = styled.h1`
  font-weight: 600;
  font-size: 1.5rem;
  padding: 0.3rem;
  text-decoration: none;
`;

export const StyledNavSection = styled.section`
  font-size: 1rem;
  width: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
