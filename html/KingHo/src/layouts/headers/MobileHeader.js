import Link from "next/link";
import React, { useState } from "react";
import { Blog, Home, Pages, Room } from "./Menu";

const MobileHeader = ({ closeMobileHeader }) => {
  const [toggle, setToggle] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" },
    activeIcon = (value) => (value === activeMenu ? "open" : "");
  return (
    <div className="mobile-menu">
      <div className="menu-backdrop" />
      <div className="close-btn" onClick={() => closeMobileHeader()}>
        <i className="icon far fa-times" />
      </div>
      <nav className="menu-box">
        <div className="nav-logo">
          <Link href="/">
            <a>
              <img src="assets/images/logo-light.png" alt="" title="" />
            </a>
          </Link>
        </div>
        <div className="menu-outer">
          {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
          <div className="collapse navbar-collapse show clearfix">
            <ul className="navigation">
              <li className="dropdown current">
                <Link href="/">
                  <a>Home</a>
                </Link>
                <ul style={activeLi("Home")}>
                  <Home />
                </ul>
                <div
                  className={`dropdown-btn ${activeIcon("Home")}`}
                  onClick={() => activeMenuSet("Home")}
                >
                  <span className="fa fa-angle-right" />
                </div>
              </li>
              <li>
                <Link href="/about">About Us </Link>
              </li>
              <li className="dropdown">
                <a href="#">Rooms</a>
                <ul style={activeLi("Rooms")}>
                  <Room />
                </ul>
                <div
                  className={`dropdown-btn ${activeIcon("Rooms")}`}
                  onClick={() => activeMenuSet("Rooms")}
                >
                  <span className="fa fa-angle-right" />
                </div>
              </li>
              <li className="dropdown">
                <a href="#">Pages</a>
                <ul style={activeLi("Pages")}>
                  <Pages />
                </ul>
                <div
                  className={`dropdown-btn ${activeIcon("Pages")}`}
                  onClick={() => activeMenuSet("Pages")}
                >
                  <span className="fa fa-angle-right" />
                </div>
              </li>
              <li className="dropdown">
                <a href="#">Blog</a>
                <ul style={activeLi("Blog")}>
                  <Blog />
                </ul>
                <div
                  className={`dropdown-btn ${activeIcon("Blog")}`}
                  onClick={() => activeMenuSet("Blog")}
                >
                  <span className="fa fa-angle-right" />
                </div>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default MobileHeader;
