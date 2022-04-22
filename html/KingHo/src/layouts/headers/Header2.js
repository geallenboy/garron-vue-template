import Link from "next/link";
import React, { useState } from "react";
import { Blog, Home, Pages, Room } from "./Menu";
import MobileHeader from "./MobileHeader";

const Header2 = () => {
  const [sidebarTrigger, setSidebarTrigger] = useState(false);
  const [searchBarTrigger, setSearchBarTrigger] = useState(false);
  const [mobileHeader, setMobileHeader] = useState(false);
  const mobileHeaderTrigger = () => {
    setMobileHeader(!mobileHeader);
    if (mobileHeader) {
      document.querySelector("body").classList.add("mobile-menu-visible");
    } else {
      document.querySelector("body").classList.remove("mobile-menu-visible");
    }
  };
  return (
    <header className="main-header header-style-two">
      {/* Header Upper */}
      <div className="header-upper">
        <div className="auto-container">
          <div className="inner-container">
            <div className="left-column">
              {/*Logo*/}
              <div className="logo-box main-logo">
                <div className="logo">
                  <Link href="/">
                    <a>
                      <img src="assets/images/logo-light.png" alt="" />
                    </a>
                  </Link>
                </div>
              </div>
              {/*Nav Box*/}
              <div className="nav-outer">
                {/*Mobile Navigation Toggler*/}
                <div
                  className="mobile-nav-toggler"
                  onClick={() => mobileHeaderTrigger()}
                >
                  <img src="assets/images/icons/icon-bar2.png" alt="" />
                </div>
                {/* Main Menu */}
                <nav className="main-menu navbar-expand-md navbar-light">
                  <div className="collapse navbar-collapse show clearfix">
                    <ul className="navigation">
                      <li className="dropdown">
                        <Link href="/">Home</Link>
                        <ul>
                          <Home />
                        </ul>
                      </li>
                      <li>
                        <Link href="/about">About Us </Link>
                      </li>
                      <li className="dropdown">
                        <a href="#">Rooms</a>
                        <ul>
                          <Room />
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">Pages</a>
                        <ul>
                          <Pages />
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">Blog</a>
                        <ul>
                          <Blog />
                        </ul>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
            <div className="right-column">
              <div className="language">
                <select>
                  <option data-display="English">English</option>
                  <option value={1}>French</option>
                  <option value={2}>Spanish</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
      {/* Sticky Header  */}
      <div className="sticky-header">
        <div className="header-upper">
          <div className="auto-container">
            <div className="inner-container">
              <div className="left-column">
                {/*Logo*/}
                <div className="logo-box main-logo">
                  <div className="logo">
                    <Link href="/">
                      <a>
                        <img src="assets/images/logo-light.png" alt="" />
                      </a>
                    </Link>
                  </div>
                </div>
                {/*Nav Box*/}
                <div className="nav-outer">
                  {/*Mobile Navigation Toggler*/}
                  <div
                    className="mobile-nav-toggler"
                    onClick={() => mobileHeaderTrigger()}
                  >
                    <img src="assets/images/icons/icon-bar.png" alt="" />
                  </div>
                  {/* Main Menu */}
                  <nav className="main-menu navbar-expand-md navbar-light">
                    <div className="collapse navbar-collapse show clearfix">
                      <ul className="navigation">
                        <li className="dropdown">
                          <Link href="/">Home</Link>
                          <ul>
                            <Home />
                          </ul>
                        </li>
                        <li>
                          <Link href="/about">About Us </Link>
                        </li>
                        <li className="dropdown">
                          <a href="#">Rooms</a>
                          <ul>
                            <Room />
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="#">Pages</a>
                          <ul>
                            <Pages />
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="#">Blog</a>
                          <ul>
                            <Blog />
                          </ul>
                        </li>
                        <li>
                          <Link href="/contact">Contact</Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
              <div className="right-column">
                <div className="language">
                  <select>
                    <option data-display="English">English</option>
                    <option value={1}>French</option>
                    <option value={2}>Spanish</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Sticky Menu */}
      {/* Mobile Menu  */}
      <MobileHeader closeMobileHeader={() => mobileHeaderTrigger()} />
      {/* End Mobile Menu */}
      <div className="nav-overlay">
        <div className="cursor" />
        <div className="cursor-follower" />
      </div>
    </header>
  );
};
export default Header2;
