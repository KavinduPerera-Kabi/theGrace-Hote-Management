import React, { useState, Fragment } from 'react'
import { FaBars } from 'react-icons/fa'; 
import {
  Nav,
  NavContainer, 
  NavLogo,
  NavItem,
  NavLinks,
  NavMenu,
  MobileIcon,
} from './NavbarStyles';
import "./Navbar.css";
const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
      <Fragment>
        <Nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
           <NavContainer>
              <NavLogo href="/">the<i><b>GRACE</b></i></NavLogo>
              <MobileIcon>
               <FaBars />
              </MobileIcon>
              <NavMenu>
                <NavItem>
                  <NavLinks href="roomadded">Accommodation</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks href="eventadded">Weddings & Events</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks href="mealsadded">Meals</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks href="vehiclesadded">Rentals</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks href="#">Spa</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks href="#">About</NavLinks>
                </NavItem>
              </NavMenu>
           </NavContainer>
        </Nav>
      </Fragment>
    )
}
  
export default Navbar;