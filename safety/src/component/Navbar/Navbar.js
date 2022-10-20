import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLinks,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElement";

const Navbar = () => {
  const [showMenu, setshowMenu] = useState(true);
  const detectSize = () => {
    let intViewportWidth = window.innerWidth;
    if (intViewportWidth >= 760) {
      setshowMenu(true);
    }
    if (intViewportWidth < 760) {
      setshowMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    detectSize();
  }, []);
  const changeShowMenu = () => {
    setshowMenu(!showMenu);
  };

  const handleClick = () => {
    changeShowMenu();
    console.log("Icon clicked");
  };
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <img
            id="logos"
            src="https://i.ibb.co/XWfMPj1/1479458-1419074164994972-1219290860-n-removebg-preview.png"
            alt="safety-logo"
          />
        </NavLogo>
        <MobileIcon onClick={handleClick}>
          <FaBars />
        </MobileIcon>
        {showMenu && (
          <NavMenu>
            <NavItem>
              <NavLinks to="/"> Home </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/about"> About </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/discover"> Discover </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/services"> services </NavLinks>
            </NavItem>

            <NavBtn>
              <NavBtnLink to="/Sign-In"> Login </NavBtnLink>
            </NavBtn>

            <NavBtn>
              <NavBtnLink to="/Sign-Up"> Register</NavBtnLink>
            </NavBtn>
          </NavMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
