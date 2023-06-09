import {useContext} from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MobileMenuContext } from "../contexts/mobileMenuContext";


const NavContainer = styled.nav`
  display: flex;

`;

const NavLinkElement = styled(NavLink)`
  padding: 0 1em;
  font-size: 1.2rem;

  &:first-child {
    margin-right: .5em;
  }

  &.active {
    text-decoration: underline;
  }
`

export default function TopNavigation() {
    const mobileMenuContext = useContext(MobileMenuContext);
      
      return (
        <NavContainer>
          <NavLinkElement 
            to="/"
            activeclassname="active"
          >
            Home
          </NavLinkElement>
          <NavLinkElement
            to="/constellation"
            activeclassname="active"
          >
            Explore
          </NavLinkElement>
        </NavContainer>
      )
}



 