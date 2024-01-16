import React, { useState } from "react";
import "../Header/Header.css";
import { Link } from "react-router-dom";
import henderlogo from '../../../src/assets/image/Header_logo.png'
import Scrollable from "../../Extra/Scrollable";


function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };
  return (

    <>
      {/* <MenuScript />   */}
      <header>
        <Scrollable />
        <div className="header">
          <div className="top-header">
            <div className="container">
              <div className="item row align-items-center justify-content-between">
                <div className="left-item">
                  <div className="phone">
                    <Link to="tel:+91 79844 43901">
                      <i class="fa-solid fa-phone "></i>
                      +91 79844 43901
                    </Link>
                    <span>|</span>
                    <Link to="tel:+91 82008 63163">+91 82008 63163</Link>
                  </div>
                </div>
                <div className="right-item">
                  <i class="fa-solid fa-envelope"></i>
                  <Link to="mailto:jbs.technology26@gmail.com" className="text">jbs.technology26@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-header">
            <div className="top">
              <div className="logo">
                <img src={henderlogo} alt="Header_logo" />
              </div>
            </div>
            <div className="bottom">
              <div className="container">
                <ul className="menu">
                  <div className="col-lg-6 left-item">
                    <li >
                      <Link to="/" className="nav-link">
                        Home
                      </Link>
                    </li>
                    <li >
                      <Link to="/aboutus" className="nav-link">
                        About
                      </Link>
                    </li>
                    <li >
                      <Link to="/portfolio" className="nav-link">
                        Portfolio
                      </Link>
                    </li>
                  </div>
                  <div className="col-lg-6 right-item">
                    <li>
                      <Link to="/services" class="nav-link">
                        Services
                      </Link>
                      <div className="submenu-1">
                        <div className="submenu-inner">
                          <ul>
                            <li><Link to="/webdevelopment">Web Development</Link></li>
                            <li><Link to="/appdevelopment">App Development</Link></li>
                            <li><Link to="/hirededicateddeveloper">HIre Dedicated Developer</Link></li>
                          </ul>
                        </div>
                      </div>

                    </li>
                    <li >
                      <Link to="/careers" className="nav-link">
                        Careers
                      </Link>
                    </li>
                    <li  >
                      <Link to="/contactus" className="nav-link">
                        Contact Us
                      </Link>
                    </li>
                  </div>
                </ul>
              </div>
            </div>

          </div>
          {/* Mobile-menu */}
          <nav>
            <div className="logo">
              <img src={henderlogo} alt="header_logo" />
            </div>
            <div className={`hamburger ${isNavOpen ? 'toggle' : ''}`} onClick={toggleNav}>
              <div className="line1" />
              <div className="line2" />
              <div className="line3" />
            </div>
            <ul className={`nav-links ${isNavOpen ? 'open' : ''}`}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/aboutus">About US</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li onClick={toggleSubMenu}>
                <Link to="/services">
                  Services <i class="fas fa-angle-down" ></i>
                </Link>
                {isSubMenuOpen && (
                  <div className="submenu-inner">
                    <ul>
                      <li><Link to="/webdevelopment">Web Development</Link></li>
                      <li><Link to="/appdevelopment">App Development</Link></li>
                      <li><Link to="/hirededicateddeveloper">Hire Dedicated Developer</Link></li>
                    </ul>
                  </div>
                )}
              </li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contactus">Contact Us</Link></li>
            </ul>
          </nav>
        </div>
      </header>








    </>
  );
}

export default Header;


