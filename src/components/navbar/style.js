import { styled } from "styled-components";

export const NavbarSection = styled.div``;

export const NavbarLogoImg = styled.img`
  width: 121px;
  height: 57px;

  @media only screen and (max-width: 768px) {
    width: 120px;
    height: 60px;
  }

  @media only screen and (max-width: 425px) {
    width: 100px;
    height: 50px;
  }
`;

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 34px;
  padding-bottom: 70px;

  @media only screen and (max-width: 540px) {
    padding-bottom: 50px;
  }

  @media only screen and (max-width: 425px) {
    padding-bottom: 30px;
  }

  @media only screen and (max-width: 350px) {
    padding-bottom: 10px;
  }
`;

export const NavbarLogo = styled.div`
  cursor: pointer;
`;

export const NavbarList = styled.ul`
  display: flex;
  align-items: center;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavbarItem = styled.li`
  color: rgba(0, 0, 0, 0.87);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    font-size: 18px;
    padding-top: 25px;
  }

  @media only screen and (max-width: 425px) {
    width: 120px;
    font-size: 16px;
    text-align: center;
  }
`;

export const NavbarButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavbarButton = styled.button`
  width: 114.059px;
  height: 35px;
  padding: 10px 10px;
  border: none;
  border-radius: 10px;
  background: #ffb200;
  box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.16);
  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;

  @media only screen and (max-width: 768px) {
    width: 100.059px;
    padding: 10px 10px;
    border-radius: 10px;
    margin-top: 30px;
  }

  @media only screen and (max-width: 425px) {
    width: 100.059px;
    padding: 10px 10px;
    border-radius: 10px;
  }
`;

export const NavbarHamburgerList = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const NavbarHamburgerBtn = styled.button`
  padding: 10px 10px;
  border: none;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  display: none;

  @media only screen and (max-width: 768px) {
    display: flex;
  }
`;

export const NavbarHamburgerSpanWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
`;

export const NavbarHamburgerSpan = styled.span`
  width: 25px;
  height: 4px;
  background-color: #000;
  border-radius: 10px;
`;

export const NavbarHamburgerSidebar = styled.div`
  width: 500px;
  height: 100%;
  background-color: red;
`;
