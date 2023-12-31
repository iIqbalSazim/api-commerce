import {
  StyledLink,
  StyledNav,
  StyledNavSection,
  StyledTitle,
  StyledTitleWrapper,
} from "./NavBarStyles";

const NavBar = () => {
  return (
    <>
      <StyledNav>
        <StyledTitleWrapper>
          <StyledLink to="/">
            <StyledTitle>API COMMERCE</StyledTitle>
          </StyledLink>
        </StyledTitleWrapper>
        <StyledNavSection>
          <StyledLink to="/">Home</StyledLink>
        </StyledNavSection>
      </StyledNav>
    </>
  );
};

export default NavBar;
