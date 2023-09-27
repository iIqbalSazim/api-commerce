import {
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
          <StyledTitle>API COMMERCE</StyledTitle>
        </StyledTitleWrapper>
        <StyledNavSection>
          <div>Home</div>
          <div>About</div>
        </StyledNavSection>
      </StyledNav>
    </>
  );
};

export default NavBar;
