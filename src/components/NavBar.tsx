import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledNavBar = styled.nav(() => css`
  background-color: #2596be;
  height: 60px;
  width: 100%;
`);

const StyledUl = styled.ul(() => css`
  display: flex;
  height: 100%;
  margin: 0;
`);

const StyledNavItem = styled.li(() => css`
  align-items: center;
  display: inline-flex;  
  list-style: none;
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }
`)

const StyledNavLink = styled(Link)(() => css`
  color: white;
  font-size: 18px;
`);

export const NavBar = () => {
  return (
    <StyledNavBar>
      <StyledUl>
        <StyledNavItem>
          <StyledNavLink to="/">Home</StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink to="/BarChart">Bar Chart</StyledNavLink>
        </StyledNavItem>
      </StyledUl>
    </StyledNavBar>
  );
};
