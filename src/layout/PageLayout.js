import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import { Link, NavLink } from "react-router-dom";
import menu from "../assets/images/menu.png";
import cancel from "../assets/images/cancel.png";
import sign from "../assets/images/case-study/taeillo1.png";
import { downloadCV } from "../helpers";

const PageLayout = ({ children, home }) => {
  const [menuStatus, setMenuStatus] = useState(false);
  const handleMenu = () => {
    setMenuStatus(!menuStatus);
  };
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  };

  return (
    <div className="layout">
      <header id="topPage">
        <div className="wrapp">
          <div className="logo_wrapper">
            <NavLink to="/">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          {home ? (
            ""
          ) : (
            <div className="nav">
              <NavLink to="/work">Work</NavLink>
              <NavLink to="/info">Info</NavLink>
              <NavLink to="/Writting">Writings</NavLink>
            </div>
          )}
          {!home && (
            <img
              className="menu"
              onClick={handleMenu}
              src={menuStatus ? cancel : menu}
              alt=""
            />
          )}
        </div>
      </header>
      <div
        className="mobile_menu "
        style={{
          display: menuStatus ? "block" : "none",
        }}
      >
        <ul>
          <li onClick={() => setMenuStatus(!menuStatus)}>
            <NavLink to="/info">
              <p>Info</p>
            </NavLink>
          </li>
          <li onClick={() => setMenuStatus(!menuStatus)}>
            <NavLink to="/work">
              <p>Work</p>
            </NavLink>
          </li>
          <li onClick={() => setMenuStatus(!menuStatus)}>
            <NavLink to="/Writting">
              <p>Writings</p>
            </NavLink>
          </li>
        </ul>
      </div>
      <div>{children}</div>

      <footer className="home_footer">
        <img src={sign} alt="" />

        <div>
          <a
            href="https://www.instagram.com/accounts/login/?next=/kingsleyukeje_/"
            target="_blank"
          >
            Instagram
          </a>
          <a href="https://www.linkedin.com/in/kingsleyukeje" target="_blank">
            Linkedin
          </a>
          <a href="https://twitter.com/kingsleyukeje_" target="_blank">
            Twitter
          </a>
        </div>
        <div>
          {/* <a className="tel" href="tel:+234 703 1356 201">
            +234 703 1356 201
          </a> */}
          <a href="mailto:kingsleyukejex@gmail.com">kingsleyukejex@gmail.com</a>
          <a onClick={downloadCV} style={{ cursor: "pointer" }}>
            Download Resume
          </a>
        </div>
      </footer>
    </div>
  );
};

export default PageLayout;
