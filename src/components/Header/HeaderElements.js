import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  width: 100%;
  z-index: 2;
`;

export const HeaderLogo = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const HeaderImg = styled.img`
  width: 50px;
  margin: 0 10px;
`;

export const HeaderP = styled.p`
  font-size: 1.3rem;
  color: #fff;
  font-weight: 700;
  width: 100px;
`;

export const NavbarLinksWrapper = styled.nav`
  display: flex;
  justify-content: center;
`;

export const NavbarLink = styled.a`
  text-align: center;
  padding: 1rem;
  border-radius: 8px;
  color: #fff;
  transition: 250ms ease-in-out;
  margin: 0 5px;

  &:hover {
    background: #2fd9e8;
    color: #000;
  }
`;
