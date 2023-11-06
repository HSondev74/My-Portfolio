import React, { useRef, useState } from "react";
import "./Header.css";
import audioFile from "../../assets/correct-2-46134.mp3";

const Header = () => {
     const [toggle, setToggle] = useState(false);
     const audioRef = useRef();

     const playAudio = () => {
          audioRef.current.play();
     };

     const handleDarkMode = () => {
          document.body.classList.toggle("dark");
     };

     const handleNavItemClick = () => {
          playAudio();
          setToggle(false);
     };

     return (
          <header className="header">
               <nav className="nav container">
                    <a href="index.html" className="nav__logo">
                         JSonDev
                    </a>
                    <div
                         className={
                              toggle ? "nav__menu show-menu" : "nav__menu"
                         }
                    >
                         <ul className="nav__list grid">
                              <NavItem
                                   onClick={handleNavItemClick}
                                   to="home"
                                   icon="uil-estate"
                              >
                                   Home
                              </NavItem>
                              <NavItem
                                   onClick={handleNavItemClick}
                                   to="about"
                                   icon="uil-user"
                              >
                                   About me
                              </NavItem>
                              <NavItem
                                   onClick={handleNavItemClick}
                                   to="skills"
                                   icon="uil-file-alt"
                              >
                                   Skills
                              </NavItem>
                              <NavItem
                                   onClick={handleNavItemClick}
                                   to="services"
                                   icon="uil-briefcase-alt"
                              >
                                   Services
                              </NavItem>
                              <NavItem
                                   onClick={handleNavItemClick}
                                   to="portfolio"
                                   icon="uil-scenery"
                              >
                                   Portfolio
                              </NavItem>
                              <NavItem
                                   onClick={handleNavItemClick}
                                   to="contact"
                                   icon="uil-message"
                              >
                                   Contact
                              </NavItem>
                         </ul>
                         <audio ref={audioRef}>
                              <source src={audioFile} type="audio/mp3" />
                         </audio>
                         <i
                              className="uil uil-times nav__close"
                              onClick={() => setToggle(false)}
                         ></i>
                    </div>
                    <div className="dark_mode" onClick={handleDarkMode}>
                         <i className="bx bx-moon"></i>
                    </div>
                    <div
                         className="nav__toggle"
                         onClick={() => setToggle(!toggle)}
                    >
                         <i className="uil uil-apps"></i>
                    </div>
               </nav>
          </header>
     );
};

const NavItem = ({ onClick, to, icon, children }) => (
     <li className="nav__item" onClick={onClick}>
          <a href={`#${to}`} className="nav__link">
               <i className={`uil ${icon} nav__icon`}></i> {children}
          </a>
     </li>
);

export default Header;
