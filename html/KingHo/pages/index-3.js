import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Counter from "../src/components/Counter";
import DatePicker from "../src/components/DatePicker";
// import DonutChart from "../src/components/DonutChart";
import Header3 from "../src/layouts/headers/Header3";
import Layouts from "../src/layouts/Layouts";
import {
  bannerSlider,
  imageSlider,
  roomsSlider,
  sponsorsSlider,
} from "../src/sliderProps";

const DonutChart = dynamic(() => import("../src/components/DonutChart"), {
  ssr: false,
});

const Index3 = () => {
  const [date, setDate] = useState(null);
  const [date2, setDate2] = useState(null);
  return (
    <Layouts noBg extraCls={"ex"} noHeader>
      <Header3 />
      {/* Bnner Section */}
      <section className="banner-section style-two">
        <Swiper {...bannerSlider} className="swiper-container banner-slider">
          <div className="swiper-wrapper">
            {/* Slide Item */}
            <SwiperSlide
              className="swiper-slide"
              style={{
                backgroundImage: "url(assets/images/main-slider/banner-1.jpg)",
              }}
            >
              <div className="content-outer">
                <div className="content-box">
                  <div className="inner">
                    <h1 className="banner-title text-light">
                      Luxury Hotel <br />
                      With River View
                    </h1>
                    <div className="link-box">
                      <Link href="/room-details">
                        <a className="theme-btn btn-style-one">
                          <span>Room Of Suites</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* Slide Item */}
            <SwiperSlide
              className="swiper-slide"
              style={{
                backgroundImage: "url(assets/images/main-slider/banner-1.jpg)",
              }}
            >
              <div className="content-outer">
                <div className="content-box">
                  <div className="inner">
                    <h1 className="banner-title text-light">
                      Boutique Hotel <br /> In Amstrong
                    </h1>
                    <div className="link-box">
                      <Link href="/room-details">
                        <a className="theme-btn btn-style-one">
                          <span>Room Of Suites</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
        {/* Check availability two */}
        <div className="check-availability-two">
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <ul>
              <li>
                <h5>Location</h5>
                <select>
                  <option data-display="Select here">Select here</option>
                  <option value={1}>Straton</option>
                  <option value={2}>Bethune</option>
                  <option value={4}>Burlington</option>
                </select>
                <i className="far fa-map-marker-alt" />
              </li>
              <li>
                <h5>Check In</h5>
                <DatePicker
                  date={date}
                  onChange={setDate}
                  placeholder={`Arrival Date`}
                />
              </li>
              <li>
                <h5>Check Out</h5>
                <DatePicker
                  date={date2}
                  onChange={setDate2}
                  placeholder={`Arrival Date`}
                />
              </li>
              <li>
                <h5>Guests</h5>
                <select>
                  <option data-display="Select here">Select here</option>
                  <option value={1}>0 Guest</option>
                  <option value={2}>1 Guest</option>
                  <option value={4}>2 Guests</option>
                  <option value={4}>3 Guests</option>
                  <option value={4}>4 Guests</option>
                  <option value={4}>5 Guests</option>
                </select>
                <i className="far fa-users" />
              </li>
              <li>
                <h5>Children</h5>
                <select>
                  <option data-display="Select here">Select here</option>
                  <option value={1}>0 Children</option>
                  <option value={2}>1 Children</option>
                  <option value={4}>2 Childrens</option>
                  <option value={4}>3 Childrens</option>
                  <option value={4}>4 Childrens</option>
                  <option value={4}>5 Childrens</option>
                </select>
                <i className="far fa-child" />
              </li>
            </ul>
            <button type="submit">check availability</button>
          </form>
        </div>
      </section>
      {/* End Bnner Section */}
      {/* feature icon */}
      <section className="feature-icon-section">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="feature-block">
                <div className="icon">
                  <i className="flaticon-wifi-signal" />
                </div>
                <h4>Free Wifi</h4>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="feature-block">
                <div className="icon">
                  <i className="flaticon-croissant" />
                </div>
                <h4>Breakfast</h4>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="feature-block">
                <div className="icon">
                  <i className="flaticon-weights" />
                </div>
                <h4>Gym Center</h4>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="feature-block">
                <div className="icon">
                  <i className="flaticon-massage" />
                </div>
                <h4>Spa &amp; Beauty</h4>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="feature-block">
                <div className="icon">
                  <i className="flaticon-game-controller" />
                </div>
                <h4>Gaming Zone</h4>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="feature-block">
                <div className="icon">
                  <i className="flaticon-plane" />
                </div>
                <h4>Transport</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section twenty-four */}
      <section className="section-twenty-four">
        <div className="auto-container">
          <div className="image-icon text-center mb-20">
            <img src="assets/images/icons/image-2.png" alt="" />
          </div>
          <h2 className="sec-title text-center mb-20">
            Welcome To Our <span className="theme-color">King Hotel</span>
          </h2>
          <div className="text text-center">
            We Have Over 40 Payment Ways for Locking the Lowest Room Rates. No
            Credit Card Needed! Read Reviews <br /> from Verified Guests. Easy
            to Modify Plans. Photos &amp; Reviews. Last <br />
            Minute Hotel Deals.
          </div>
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-6">
              <div className="block-twenty-four">
                <div className="image">
                  <img src="assets/images/resource/image-27.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="block-twenty-four">
                <div className="image">
                  <img src="assets/images/resource/image-28.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="block-twenty-four">
                <div className="image">
                  <img src="assets/images/resource/image-29.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section three */}
      <section className="section-three style-two">
        <h4 className="d-none">heading</h4>
        <div className="auto-container">
          <div className="sub-title text-center mb-30">Sponsors</div>
          <Swiper
            {...sponsorsSlider}
            className="theme_carousel swiper-container"
          >
            <SwiperSlide className="image">
              <img src="assets/images/resource/image-2.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className="image">
              <img src="assets/images/resource/image-3.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className="image">
              <img src="assets/images/resource/image-4.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className="image">
              <img src="assets/images/resource/image-5.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className="image">
              <img src="assets/images/resource/image-6.png" alt="" />
            </SwiperSlide>
          </Swiper>
          <div className="carousel-border style-two" />
        </div>
      </section>
      {/* section twenty-five */}
      <section className="section-twenty-five">
        <div className="auto-container">
          <div className="big-title">Rooms</div>
          <div className="sub-title text-center">Rooms</div>
          <h2 className="sec-title text-center">Rooms &amp; Suites</h2>
          <Swiper {...roomsSlider} className="theme_carousel swiper-container">
            <SwiperSlide className="slide-item">
              <div className="block-twenty-five">
                <div className="image">
                  <img src="assets/images/resource/image-30.jpg" alt="" />
                </div>
                <div className="lower-content">
                  <div className="pricing">150/Night</div>
                  <div className="icon-list">
                    <ul>
                      <li>
                        <i className="flaticon-user" />
                        <h4>Capacity</h4>
                        <div className="text">4 Person</div>
                      </li>
                      <li>
                        <i className="flaticon-preview" />
                        <h4>Size</h4>
                        <div className="text">600sqm</div>
                      </li>
                      <li>
                        <i className="flaticon-view" />
                        <h4>View</h4>
                        <div className="text">City, Ocean</div>
                      </li>
                    </ul>
                  </div>
                  <h3>Delux Queen Luxury Room</h3>
                  <Link href="/room-details">
                    <a className="theme-btn btn-style-four">
                      <span>View Room</span>
                    </a>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide-item">
              <div className="block-twenty-five">
                <div className="image">
                  <img src="assets/images/resource/image-31.jpg" alt="" />
                </div>
                <div className="lower-content">
                  <div className="pricing">150/Night</div>
                  <div className="icon-list">
                    <ul>
                      <li>
                        <i className="flaticon-user" />
                        <h4>Capacity</h4>
                        <div className="text">4 Person</div>
                      </li>
                      <li>
                        <i className="flaticon-preview" />
                        <h4>Size</h4>
                        <div className="text">600sqm</div>
                      </li>
                      <li>
                        <i className="flaticon-view" />
                        <h4>View</h4>
                        <div className="text">City, Ocean</div>
                      </li>
                    </ul>
                  </div>
                  <h3>Delux Queen Luxury Room</h3>
                  <Link href="/room-details">
                    <a className="theme-btn btn-style-four">
                      <span>View Room</span>
                    </a>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide-item">
              <div className="block-twenty-five">
                <div className="image">
                  <img src="assets/images/resource/image-32.jpg" alt="" />
                </div>
                <div className="lower-content">
                  <div className="pricing">150/Night</div>
                  <div className="icon-list">
                    <ul>
                      <li>
                        <i className="flaticon-user" />
                        <h4>Capacity</h4>
                        <div className="text">4 Person</div>
                      </li>
                      <li>
                        <i className="flaticon-preview" />
                        <h4>Size</h4>
                        <div className="text">600sqm</div>
                      </li>
                      <li>
                        <i className="flaticon-view" />
                        <h4>View</h4>
                        <div className="text">City, Ocean</div>
                      </li>
                    </ul>
                  </div>
                  <h3>Delux Queen Luxury Room</h3>
                  <Link href="/room-details">
                    <a className="theme-btn btn-style-four">
                      <span>View Room</span>
                    </a>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* section twenty six */}
      <section className="section-twenty-six">
        <div className="auto-container">
          <div className="title-box">
            <div className="big-title">Features</div>
            <div className="sub-title">Features</div>
            <h2 className="sec-title">Why Choose Us</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="block-twenty-six">
                <div className="icon-box">
                  <div className="icon">
                    <i className="flaticon-date" />
                  </div>
                </div>
                <h4>Fast &amp; Easy Booking</h4>
                <div className="lower-border" />
                <div className="text">
                  Cancel Free on Most Hotels. Pa <br />
                  Now or Later on Most Rooms. By <br />
                  Your Side from Book to Stay.
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="block-twenty-six">
                <div className="icon-box">
                  <div className="icon">
                    <i className="flaticon-room" />
                  </div>
                </div>
                <h4>Hotel &amp; Room Booking</h4>
                <div className="lower-border" />
                <div className="text">
                  Cancel Free on Most Hotels. Pa <br />
                  Now or Later on Most Rooms. By <br />
                  Your Side from Book to Stay.
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="block-twenty-six">
                <div className="icon-box">
                  <div className="icon">
                    <i className="flaticon-location-1" />
                  </div>
                </div>
                <h4>Picked Best Location</h4>
                <div className="lower-border" />
                <div className="text">
                  Cancel Free on Most Hotels. Pa <br />
                  Now or Later on Most Rooms. By <br />
                  Your Side from Book to Stay.
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="block-twenty-six">
                <div className="icon-box">
                  <div className="icon">
                    <i className="flaticon-dollar" />
                  </div>
                </div>
                <h4>Easy Payment &amp; Cancel</h4>
                <div className="lower-border" />
                <div className="text">
                  Cancel Free on Most Hotels. Pa <br />
                  Now or Later on Most Rooms. By <br />
                  Your Side from Book to Stay.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section twenty seven */}
      <section className="section-twenty-seven">
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="image">
                <img src="assets/images/resource/image-33.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="block-twenty-seven">
                <div className="sub-title">Newsletter</div>
                <h2 className="sec-title mb-30">Get Weekly Updates</h2>
                <div className="text">
                  We Have Over 40 Payment Ways for Locking the Lowest Room
                  Rates. <br /> No Credit Card Needed! Read Reviews from
                  Verified Guests. Easy to <br />
                  Modify Plans. Photos &amp; Reviews. Last Minute Hotel Deals.
                </div>
                {/* form start */}
                <form method="post" onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      defaultValue=""
                      placeholder="Enter email address"
                      required=""
                    />
                    <button type="submit" className="submit-btn">
                      <span>Subscribe Now</span>
                    </button>
                  </div>
                </form>
                {/* form end */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section twenty eight */}
      <section className="section-twenty-eight">
        <div className="auto-container">
          <div className="sub-title text-center">Video Tour</div>
          <h2 className="sec-title text-center text-light">Room Video Views</h2>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="block-twenty-eight">
                <div className="image">
                  <img src="assets/images/resource/image-34.jpg" alt="" />
                </div>
                <div className="video-btn-two">
                  <a
                    href="https://www.youtube.com/watch?v=nfP5N9Yc72A&t=28s"
                    className="overlay-link play-now ripple"
                    data-fancybox="gallery"
                    data-caption=""
                  >
                    <i className="fas fa-play" />
                  </a>
                </div>
                <div className="inner-box">
                  <div className="pricing">$100 /Night</div>
                  <h3>Grand Delux Room</h3>
                </div>
              </div>
              <div className="block-twenty-eight">
                <div className="image">
                  <img src="assets/images/resource/image-35.jpg" alt="" />
                </div>
                <div className="video-btn-two">
                  <a
                    href="https://www.youtube.com/watch?v=nfP5N9Yc72A&t=28s"
                    className="overlay-link play-now ripple"
                    data-fancybox="gallery"
                    data-caption=""
                  >
                    <i className="fas fa-play" />
                  </a>
                </div>
                <div className="inner-box">
                  <div className="pricing">$100 /Night</div>
                  <h3>Grand Delux Room</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="block-twenty-eight">
                <div className="image">
                  <img src="assets/images/resource/image-36.jpg" alt="" />
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
                <div className="inner-box">
                  <div className="pricing">$100 /Night</div>
                  <h4>Grand Delux Room</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="block-twenty-eight">
                <div className="image">
                  <img src="assets/images/resource/image-37.jpg" alt="" />
                </div>
                <div className="video-btn-two">
                  <a
                    href="https://www.youtube.com/watch?v=nfP5N9Yc72A&t=28s"
                    className="overlay-link play-now ripple"
                    data-fancybox="gallery"
                    data-caption=""
                  >
                    <i className="fas fa-play" />
                  </a>
                </div>
                <div className="inner-box">
                  <div className="pricing">$100 /Night</div>
                  <h3>Grand Delux Room</h3>
                </div>
              </div>
              <div className="block-twenty-eight">
                <div className="image">
                  <img src="assets/images/resource/image-38.jpg" alt="" />
                </div>
                <div className="video-btn-two">
                  <a
                    href="https://www.youtube.com/watch?v=nfP5N9Yc72A&t=28s"
                    className="overlay-link play-now ripple"
                    data-fancybox="gallery"
                    data-caption=""
                  >
                    <i className="fas fa-play" />
                  </a>
                </div>
                <div className="inner-box">
                  <div className="pricing">$100 /Night</div>
                  <h3>Grand Delux Room</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section twenty nine */}
      <section className="section-twenty-nine">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="block-twenty-nine">
                <div className="sub-title text-center">Counter</div>
                <h2 className="sec-title text-center">Some Fun Fact</h2>
                <div className="row no-gutters">
                  <div className="col-md-6">
                    <div className="funfact">
                      {/* counter */}
                      <div className="progress-block">
                        <div className="inner-box">
                          <div className="graph-outer">
                            <DonutChart value={72} />
                            <div className="inner-text count-box counted">
                              <Counter end={72} />%
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* counter-end */}
                      <p>Flexible Price </p>
                      <div className="text">
                        Hotel content marketing focuses <br /> on creating
                        relevant.
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="funfact">
                      {/* counter */}
                      <div className="progress-block">
                        <div className="inner-box">
                          <div className="graph-outer">
                            <DonutChart value={50} />
                            <div className="inner-text count-box counted">
                              <Counter end={50} />%
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* counter-end */}
                      <p>Anytime Discharge </p>
                      <div className="text">
                        Hotel content marketing focuses <br /> on creating
                        relevant.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="author-box">
                    <div className="author-border" />
                    <div className="author-image">
                      <img src="assets/images/resource/image-8.png" alt="" />
                    </div>
                    <div className="content-box">
                      <div className="author">
                        Alexis D. Dowson
                        <br />
                        Founder
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image">
                <img src="assets/images/resource/image-39.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section thirty */}
      <section className="section-thirty">
        <div className="auto-container">
          <div className="big-title text-center">Plans</div>
          <div className="sub-title text-center">Our Plan</div>
          <h2 className="sec-title text-center">Price &amp; Plans</h2>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="block-thirty">
                <div className="pricing-title">Basic</div>
                <div className="pricing">
                  <sub>$</sub>29<span>.99</span>
                </div>
                <div className="icon-list">
                  <ul>
                    <li>
                      <i className="fas fa-check" />
                      Food take-way option
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Easy To Access Door
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Unlimited Drinks
                    </li>
                    <li className="unavailable">
                      <i className="fas fa-check" />
                      Gym &amp; Other Equipment
                    </li>
                    <li className="unavaliable">
                      <i className="fas fa-check" />
                      Support 24/7 Online
                    </li>
                  </ul>
                </div>
                <a href="#" className="theme-btn btn-style-one dark">
                  <span>Make Your Order</span>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="block-thirty">
                <div className="pricing-title">Advanced</div>
                <div className="pricing">
                  <sub>$</sub>49<span>.99</span>
                </div>
                <div className="icon-list">
                  <ul>
                    <li>
                      <i className="fas fa-check" />
                      Food take-way option
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Easy To Access Door
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Unlimited Drinks
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Gym &amp; Other Equipment
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Support 24/7 Online
                    </li>
                  </ul>
                </div>
                <a href="#" className="theme-btn btn-style-one dark">
                  <span>Make Your Order</span>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="block-thirty">
                <div className="pricing-title">Family</div>
                <div className="pricing">
                  <sub>$</sub>99<span>.99</span>
                </div>
                <div className="icon-list">
                  <ul>
                    <li>
                      <i className="fas fa-check" />
                      Food take-way option
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Easy To Access Door
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Unlimited Drinks
                    </li>
                    <li className="unavailable">
                      <i className="fas fa-check" />
                      Gym &amp; Other Equipment
                    </li>
                    <li className="unavaliable">
                      <i className="fas fa-check" />
                      Support 24/7 Online
                    </li>
                  </ul>
                </div>
                <a href="#" className="theme-btn btn-style-one dark">
                  <span>Make Your Order</span>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="block-thirty">
                <div className="pricing-title">Team</div>
                <div className="pricing">
                  <sub>$</sub>119<span>.99</span>
                </div>
                <div className="icon-list">
                  <ul>
                    <li>
                      <i className="fas fa-check" />
                      Food take-way option
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Easy To Access Door
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Unlimited Drinks
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Gym &amp; Other Equipment
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Support 24/7 Online
                    </li>
                  </ul>
                </div>
                <a href="#" className="theme-btn btn-style-one dark">
                  <span>Make Your Order</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section thirty-one */}
      <section className="section-thirty-one">
        <h4 className="d-none">heading</h4>
        <div className="auto-container">
          <Swiper {...imageSlider} className="theme_carousel swiper-container">
            <SwiperSlide className="column">
              <div className="block-thirty-one">
                <div className="image">
                  <img src="assets/images/resource/image-40.jpg" alt="" />
                </div>
                <div className="view-project">
                  <a
                    data-fancybox="example gallery"
                    href="assets/images/resource/image-40.jpg"
                    className="zoom-btn"
                  >
                    <i className="flaticon-add-circular-outlined-button" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="column">
              <div className="block-thirty-one">
                <div className="image">
                  <img src="assets/images/resource/image-41.jpg" alt="" />
                </div>
                <div className="view-project">
                  <a
                    data-fancybox="example gallery"
                    href="assets/images/resource/image-41.jpg"
                    className="zoom-btn"
                  >
                    <i className="flaticon-add-circular-outlined-button" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="column">
              <div className="block-thirty-one">
                <div className="image">
                  <img src="assets/images/resource/image-42.jpg" alt="" />
                </div>
                <div className="view-project">
                  <a
                    data-fancybox="example gallery"
                    href="assets/images/resource/image-42.jpg"
                    className="zoom-btn"
                  >
                    <i className="flaticon-add-circular-outlined-button" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="column">
              <div className="block-thirty-one">
                <div className="image">
                  <img src="assets/images/resource/image-43.jpg" alt="" />
                </div>
                <div className="view-project">
                  <a
                    data-fancybox="example gallery"
                    href="assets/images/resource/image-43.jpg"
                    className="zoom-btn"
                  >
                    <i className="flaticon-add-circular-outlined-button" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="column">
              <div className="block-thirty-one">
                <div className="image">
                  <img src="assets/images/resource/image-44.jpg" alt="" />
                </div>
                <div className="view-project">
                  <a
                    data-fancybox="example gallery"
                    href="assets/images/resource/image-44.jpg"
                    className="zoom-btn"
                  >
                    <i className="flaticon-add-circular-outlined-button" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* section thirty-two */}
      <section className="section-thirty-two">
        <div className="auto-container">
          <div className="title-box">
            <div className="big-title">News</div>
            <div className="sub-title">News</div>
            <h2 className="sec-title mb-30">News Feeds</h2>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="block-thirty-two">
                <div className="image">
                  <img src="assets/images/resource/news-9.jpg" alt="" />
                </div>
                <div className="date">
                  20 <br />
                  <span>Jun</span>
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
                  <div className="author-box">
                    <div className="author-image">
                      <img src="assets/images/resource/image-8.png" alt="" />
                    </div>
                    <div className="content-box">
                      <div className="author">
                        Alexis D. Dowson
                        <br />
                        <span>By Admin</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="block-thirty-two">
                <div className="image">
                  <img src="assets/images/resource/news-10.jpg" alt="" />
                </div>
                <div className="date">
                  20 <br />
                  <span>Jun</span>
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
                  <div className="author-box">
                    <div className="author-image">
                      <img src="assets/images/resource/image-9.png" alt="" />
                    </div>
                    <div className="content-box">
                      <div className="author">
                        Alexis D. Dowson
                        <br />
                        <span>By Admin</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="block-thirty-two">
                <div className="image">
                  <img src="assets/images/resource/news-11.jpg" alt="" />
                </div>
                <div className="date">
                  20 <br />
                  <span>Jun</span>
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
                  <div className="author-box">
                    <div className="author-image">
                      <img src="assets/images/resource/image-10.png" alt="" />
                    </div>
                    <div className="content-box">
                      <div className="author">
                        Alexis D. Dowson
                        <br />
                        <span>By Admin</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Index3;
