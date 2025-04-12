import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: center;
`;

const Heading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: black;
`;

const NavUL = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 2.4rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 500;
  color: black;

  &:hover {
    background-color: var(--color-primary-light);
    color: var(--color-primary-dark);
  }

  &.active {
    background-color: var(--color-primary);
    color: #5b2a2a;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Heading>Navbar</Heading>
      <NavUL>
        <StyledNavLink to="/dashboard" activeClassName="active">
          <li>Dashboard</li>
        </StyledNavLink>
        <StyledNavLink to="/settings" activeClassName="active">
          <li>Settings</li>
        </StyledNavLink>
        <StyledNavLink to="/login" activeClassName="active">
          <li>Login</li>
        </StyledNavLink>
      </NavUL>
    </Nav>
  );
};

export default Navbar;
