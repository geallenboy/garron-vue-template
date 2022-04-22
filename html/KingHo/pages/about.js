import Link from "next/link";
import React from "react";
import { Nav, Tab } from "react-bootstrap";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";

const About = () => {
  return (
    <Layouts>
      {/* Page Title */}
      <PageBanner pageName={"About"} />
      {/* section one */}
      <section className="section-one">
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="image mb-30">
                <img src="assets/images/resource/image-45.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="block-two style-two">
                <div className="image mb-10">
                  <img src="assets/images/icons/image-2.png" alt="" />
                </div>
                <h2 className="sec-title">
                  Welcome To Our <br />{" "}
                  <span className="theme-color">King Hotel</span>{" "}
                </h2>
                <div className="text-two">
                  We Have Over 40 Payment Ways for Locking the Lowest Room
                  Rates. No Credit Card Needed! Read Reviews from Verified
                  Guests.
                </div>
                <div className="bottom-content">
                  <div className="ratings">4.6</div>
                  <div className="text-three">
                    Users <br /> Ratings
                  </div>
                  <Link href="/gallery">
                    <a className="theme-btn btn-style-one dark">
                      <span>Explore Now</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section thirty three */}
      <section className="section-thirty-three">
        <div className="auto-container">
          <div className="sub-title text-center">Featurees</div>
          <h2 className="sec-title text-center">Core Facitilites</h2>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="block-thirty-three">
                <div className="icon">
                  {" "}
                  <i className="flaticon-wifi-signal" />
                </div>
                <h4>Unlimited Wifi</h4>
                <div className="text">
                  We Have Over 2 Payment Way <br />
                  for Locking the Lowest Room <br />
                  Rates. No Credit Card Needed!
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="block-thirty-three">
                <div className="icon">
                  <i className="flaticon-croissant" />
                </div>
                <h4>Breakfast</h4>
                <div className="text">
                  We Have Over 2 Payment Way <br />
                  for Locking the Lowest Room <br />
                  Rates. No Credit Card Needed!
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="block-thirty-three">
                <div className="icon">
                  <i className="flaticon-weights" />
                </div>
                <h4>Gym Center</h4>
                <div className="text">
                  We Have Over 2 Payment Way <br />
                  for Locking the Lowest Room <br />
                  Rates. No Credit Card Needed!
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="block-thirty-three">
                <div className="icon">
                  <i className="flaticon-massage" />
                </div>
                <h4>Spa &amp; Beauty</h4>
                <div className="text">
                  We Have Over 2 Payment Way <br />
                  for Locking the Lowest Room <br />
                  Rates. No Credit Card Needed!
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="block-thirty-three">
                <div className="icon">
                  <i className="flaticon-game-controller" />
                </div>
                <h4>Gaming Zone</h4>
                <div className="text">
                  We Have Over 2 Payment Way <br />
                  for Locking the Lowest Room <br />
                  Rates. No Credit Card Needed!
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="block-thirty-three">
                <div className="icon">
                  <i className="flaticon-plane" />
                </div>
                <h4>Transport</h4>
                <div className="text">
                  We Have Over 2 Payment Way <br />
                  for Locking the Lowest Room <br />
                  Rates. No Credit Card Needed!
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="block-thirty-three">
                <div className="icon">
                  {" "}
                  <i className="flaticon-breakfast" />
                </div>
                <h4>Breakfast Included</h4>
                <div className="text">
                  We Have Over 2 Payment Way <br />
                  for Locking the Lowest Room <br />
                  Rates. No Credit Card Needed!
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="block-thirty-three">
                <div className="icon">
                  {" "}
                  <i className="flaticon-bath" />
                </div>
                <h4>Shower Bathtub</h4>
                <div className="text">
                  We Have Over 2 Payment Way <br />
                  for Locking the Lowest Room <br />
                  Rates. No Credit Card Needed!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section thirty four */}
      <section className="section-thirty-four">
        <h4 className="d-none">heading</h4>
        <div className="auto-container">
          <div className="row">
            <div className="col-md-6">
              <div className="block-thirty-four">
                <div className="image">
                  <img src="assets/images/resource/image-46.jpg" alt="" />
                </div>
                <div className="video-btn">
                  <a
                    href="https://www.youtube.com/watch?v=nfP5N9Yc72A&t=28s"
                    className="overlay-link play-now ripple"
                    data-fancybox="gallery"
                    data-caption=""
                  >
                    <i className="fas fa-play" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="block-thirty-four">
                <div className="image">
                  <img src="assets/images/resource/image-47.jpg" alt="" />
                </div>
                <div className="video-btn">
                  <a
                    href="https://www.youtube.com/watch?v=nfP5N9Yc72A&t=28s"
                    className="overlay-link play-now ripple"
                    data-fancybox="gallery"
                    data-caption=""
                  >
                    <i className="fas fa-play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section thirty five */}
      <section className="section-thirty-five">
        <div className="auto-container">
          <Tab.Container defaultActiveKey={"tab-1"}>
            <div className="row">
              <div className="col-lg-7 order-2">
                <Tab.Content className="tab-content" id="myTabContent">
                  <Tab.Pane
                    className="tab-pane fade"
                    id="tab-1"
                    role="tabpanel"
                    eventKey="tab-1"
                  >
                    <div className="block-thirty-six">
                      <div className="image">
                        <img src="assets/images/resource/image-48.jpg" alt="" />
                      </div>
                      <div className="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tem por incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, qu quat.
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </div>
                      <Link href="/room-details">
                        <a className="theme-btn style-two">
                          <span>Our Services</span>
                        </a>
                      </Link>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane
                    className="tab-pane fade"
                    id="tab-2"
                    role="tabpanel"
                    eventKey="tab-2"
                  >
                    <div className="block-thirty-six">
                      <div className="image">
                        <img src="assets/images/resource/image-48.jpg" alt="" />
                      </div>
                      <div className="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tem por incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, qu quat.
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </div>
                      <Link href="/room-details">
                        <a className="theme-btn style-two">
                          <span>Our Services</span>
                        </a>
                      </Link>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane
                    className="tab-pane fade"
                    id="tab-3"
                    role="tabpanel"
                    eventKey="tab-3"
                  >
                    <div className="block-thirty-six">
                      <div className="image">
                        <img src="assets/images/resource/image-48.jpg" alt="" />
                      </div>
                      <div className="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tem por incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, qu quat.
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </div>
                      <Link href="/room-details">
                        <a className="theme-btn style-two">
                          <span>Our Services</span>
                        </a>
                      </Link>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane
                    className="tab-pane fade"
                    id="tab-4"
                    role="tabpanel"
                    eventKey="tab-4"
                  >
                    <div className="block-thirty-six">
                      <div className="image">
                        <img src="assets/images/resource/image-48.jpg" alt="" />
                      </div>
                      <div className="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tem por incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, qu quat.
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </div>
                      <Link href="/room-details">
                        <a className="theme-btn style-two">
                          <span>Our Services</span>
                        </a>
                      </Link>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane
                    className="tab-pane fade"
                    id="tab-5"
                    role="tabpanel"
                    eventKey="tab-5"
                  >
                    <div className="block-thirty-six">
                      <div className="image">
                        <img src="assets/images/resource/image-48.jpg" alt="" />
                      </div>
                      <div className="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tem por incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, qu quat.
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </div>
                      <Link href="/room-details">
                        <a className="theme-btn style-two">
                          <span>Our Services</span>
                        </a>
                      </Link>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </div>
              <div className="col-lg-5">
                <div className="sub-title">Why Choose</div>
                <h2 className="sec-title">Why Choose Us</h2>
                <div className="nav-tab-wrapper">
                  <Nav
                    as={"ul"}
                    className="nav nav-tabs"
                    id="myTab"
                    role="tablist"
                  >
                    <Nav.Item
                      as={"li"}
                      className="nav-item"
                      role="presentation"
                    >
                      <Nav.Link
                        as={"button"}
                        className="nav-link"
                        data-bs-toggle="tab"
                        eventKey="tab-1"
                        type="button"
                        role="tab"
                        aria-selected="true"
                      >
                        <span>
                          <i className="flaticon-room" /> Our Rooms
                        </span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item
                      as={"li"}
                      className="nav-item"
                      role="presentation"
                    >
                      <Nav.Link
                        as={"button"}
                        className="nav-link"
                        data-bs-toggle="tab"
                        eventKey="tab-2"
                        type="button"
                        role="tab"
                        aria-selected="false"
                      >
                        <span>
                          <i className="flaticon-kitchen-set" /> Room Setup
                        </span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item
                      as={"li"}
                      className="nav-item"
                      role="presentation"
                    >
                      <Nav.Link
                        as={"button"}
                        className="nav-link"
                        data-bs-toggle="tab"
                        eventKey="tab-3"
                        type="button"
                        role="tab"
                        aria-selected="false"
                      >
                        <span>
                          <i className="flaticon-plane" /> Transport
                        </span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item
                      as={"li"}
                      className="nav-item"
                      role="presentation"
                    >
                      <Nav.Link
                        as={"button"}
                        className="nav-link"
                        data-bs-toggle="tab"
                        eventKey="tab-4"
                        type="button"
                        role="tab"
                        aria-selected="false"
                      >
                        <span>
                          <i className="flaticon-cheers" />
                          Bar &amp; Drinks
                        </span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item
                      as={"li"}
                      className="nav-item"
                      role="presentation"
                    >
                      <Nav.Link
                        as={"button"}
                        className="nav-link"
                        data-bs-toggle="tab"
                        eventKey="tab-5"
                        type="button"
                        role="tab"
                        aria-selected="false"
                      >
                        <span>
                          <i className="flaticon-game-controller" />
                          Gaming Zone
                        </span>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </div>
            </div>
          </Tab.Container>
        </div>
      </section>
      {/* section thirty seven */}
      <section className="section-thirty-seven">
        <div className="auto-container">
          <div className="sub-title text-center">Blog Insights</div>
          <h2 className="sec-title text-center">News Feeds</h2>
          <div className="row">
            <div className="col-lg-4">
              <div className="block-thirty-seven">
                <div className="image">
                  <img src="assets/images/resource/image-10.jpg" alt="" />
                </div>
                <div className="date">
                  20 <br /> <span>Jun</span>
                </div>
                <div className="inner-box">
                  <div className="category">Hotel</div>
                  <h4>
                    <Link href="/blog-details">
                      <a>
                        Choose From a Wide Range of <br /> Properties Which
                      </a>
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="block-thirty-seven">
                <div className="image">
                  <img src="assets/images/resource/news-12.jpg" alt="" />
                </div>
                <div className="date">
                  20 <br /> <span>Jun</span>
                </div>
                <div className="inner-box">
                  <div className="category">Hotel</div>
                  <h4>
                    <Link href="/blog-details">
                      <a>
                        Choose From a Wide Range of <br /> Properties Which
                      </a>
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="block-thirty-seven">
                <div className="image">
                  <img src="assets/images/resource/news-13.jpg" alt="" />
                </div>
                <div className="date">
                  20 <br /> <span>Jun</span>
                </div>
                <div className="inner-box">
                  <div className="category">Hotel</div>
                  <h4>
                    <Link href="/blog-details">
                      <a>
                        Choose From a Wide Range of <br /> Properties Which
                      </a>
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default About;
