import Link from "next/link";
import React from "react";

const PageBanner = ({ pageName, pageTitle }) => {
  return (
    <section
      className="page-title"
      style={{
        backgroundImage: "url(assets/images/main-slider/about.jpg)",
      }}
    >
      <div className="auto-container">
        <div className="content-box">
          <div className="content-wrapper">
            <ul className="bread-crumb">
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>{pageName ? pageName : pageTitle}</li>
            </ul>
            <div className="title">
              <h1>{pageName}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PageBanner;
