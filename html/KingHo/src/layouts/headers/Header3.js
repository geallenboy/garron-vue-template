import Link from "next/link";
import React, { useState } from "react";
// import { Blog, Home, Pages, Room } from "./Menu";
import MobileHeader from "./MobileHeader";

const Header3 = () => {
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
    <header className="main-header header-style-three">
      {/* Header Upper */}
      <div className="header-upper">
        <div className="auto-container">
          <div className="inner-container">
            <div className="logo-box main-logo">
              <div className="logo">
                <Link href="/">
                  <a>
                    <img src="assets/images/logo-two.png" alt="" />
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
                <img src="assets/images/icons/icon-bar3.png" alt="" />
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
              <div className="logo-box main-logo">
                <div className="logo">
                  <Link href="/">
                    <a>
                      <img src="assets/images/logo-two.png" alt="" />
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
                  <img src="assets/images/icons/icon-bar3.png" alt="" />
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
export default Header3;
