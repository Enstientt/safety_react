import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Nav = styled.nav`
  background: #000;

  font-size: 1rem;
  opacity: 0.7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  @media screen and (max-width: 760px) {
    transition: 0.8s all ease;
    min-height: 90px;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 90px;
  z-index: 10;
  padding: 0px 24px;
  width: 100vw;
`;
export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: bold;

  @media screen and (max-width: 760px) {
    position: absolute;
    left: 0;
    top: 0;
  }
`;
export const MobileIcon = styled.button`
  display: none;
  background: none;
  border: none;
  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    width: 30px;
    height: 30px;
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
    z-index: 999;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  min-height: 100px;
  width: 100vw;
  margin-left: 30px;
  justify-content: space-between;

  @media screen and (max-width: 760px) {
    transition: 0.9s ease-in-out;
    flex-direction: column;
    position: relative;
    width: 100vh;
    margin: 0;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 30px;
  }
`;
export const NavItem = styled.li`
  list-style-type: none;
  width: 100%;
  margin-left: 4rem;
  align-items: center;
  &:hover {
    color: #01bf71;
    transform: scale(1.2);
  }
  @media screen and (max-width: 760px) {
    margin: 0;
    padding: 30px;
  }
`;
export const NavLinks = styled(LinkR)`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 10px;
  background: black;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: rgba(196, 196, 11, 0.829);
    color: #010606;
    border-radius: 8px;
    transform: scale(1.08);
  }
`;
export const NavBtnLink = styled(LinkR)`
  white-space: nowrap;
  padding: 0;
  border-radius: 10%;
  color: #e4e9e9;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
`;
