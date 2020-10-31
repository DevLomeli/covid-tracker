import React from "react";
import {
  HeaderContainer,
  HeaderLogo,
  HeaderImg,
  HeaderP,
  NavbarLinksWrapper,
  NavbarLink,
} from "./HeaderElements";
const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo to="/">
        <HeaderImg src="https://www.flaticon.es/svg/static/icons/svg/1097/1097244.svg" />
        <HeaderP>Covid Tracker</HeaderP>
      </HeaderLogo>
      <NavbarLinksWrapper>
        <NavbarLink to="#">Home</NavbarLink>
        <NavbarLink to="#">About</NavbarLink>
        <NavbarLink to="#">Covid Tracker</NavbarLink>
        <NavbarLink to="#">Contact</NavbarLink>
      </NavbarLinksWrapper>
    </HeaderContainer>
  );
};

export default Header;
