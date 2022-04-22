import Link from "next/link";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import DatePicker from "../src/components/DatePicker";
import Layouts from "../src/layouts/Layouts";
import {
  bannerSlider,
  sponsorsSlider,
  testimonialSlider,
} from "../src/sliderProps";

const Index = () => {
  const [date, setDate] = useState(null);
  const [date2, setDate2] = useState(null);
  return (
    <Layouts noBg extraCls={"ex"} headernumber>
      {/* Bnner Section */}
      <section className="banner-section">
        <div className="shape">
          <img src="assets/images/shape/shape-3.png" alt="" />
        </div>
        <div className="big-title">Booking</div>
        <Swiper {...bannerSlider} className="swiper-container banner-slider">
          <div className="swiper-wrapper">
            {/* Slide Item */}
            <SwiperSlide className="swiper-slide">
              <div className="content-outer">
                <div className="content-box">
                  <div className="inner">
                    <div className="logo">
                      <img src="assets/images/icons/image-2.png" alt="" />
                    </div>
                    <h1 className="banner-title">
                      Amazing Suite <br />
                      With River View <br />
                      &amp; Lot Of Services
                    </h1>
                    <div className="link-box">
                      <Link href="/room-grid">
                        <a className="theme-btn btn-style-one">
                          <span>View Our Rooms</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="image-box">
                    <div className="image">
                      <img src="assets/images/resource/image-1.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* Slide Item */}
            <SwiperSlide className="swiper-slide">
              <div className="content-outer">
                <div className="content-box">
                  <div className="inner">
                    <div className="logo">
                      <img src="assets/images/icons/image-2.png" alt="" />
                    </div>
                    <h1 className="banner-title">
                      Amazing Suite <br />
                      With River View <br />
                      &amp; Lot Of Services
                    </h1>
                    <div className="link-box">
                      <Link href="/room-grid">
                        <a className="theme-btn btn-style-one">
                          <span>View Our Rooms</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="image-box">
                    <div className="image">
                      <img src="assets/images/resource/image-1.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
        <div className="banner-slider-nav">
          <div className="banner-slider-control banner-slider-button-prev">
            <span>
              <i className="fas fa-arrow-right" />
            </span>
          </div>
          <div className="banner-slider-control banner-slider-button-next">
            <span>
              <i className="fas fa-arrow-right" />
            </span>{" "}
          </div>
        </div>
      </section>
      {/* End Bnner Section */}
      {/* Check availability */}
      <div className="check-availability">
        <div className="auto-container">
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <div className="left-side">
              <ul>
                <li>
                  {/* <input
                    type="date"
                    placeholder="Arrival Date"
                    className="datepicker"
                  />{" "} */}
                  {/* <i className="far fa-calendar-alt" /> */}

                  <DatePicker
                    date={date}
                    onChange={setDate}
                    placeholder={`Arrival Date`}
                  />
                </li>
                <li>
                  <DatePicker
                    date={date2}
                    onChange={setDate2}
                    placeholder={`Departure Date`}
                  />
                </li>
                <li>
                  <select>
                    <option data-display="Aduls">Aduls</option>
                    <option value={1}>0 Adul</option>
                    <option value={2}>1 Adul</option>
                    <option value={4}>2 Aduls</option>
                    <option value={4}>3 Aduls</option>
                    <option value={4}>4 Aduls</option>
                    <option value={4}>5 Aduls</option>
                  </select>
                </li>
                <li>
                  <select>
                    <option data-display="Childrens">Childrens</option>
                    <option value={1}>0 Children</option>
                    <option value={2}>1 Children</option>
                    <option value={4}>2 Childrens</option>
                    <option value={4}>3 Childrens</option>
                    <option value={4}>4 Childrens</option>
                    <option value={4}>5 Childrens</option>
                  </select>
                </li>
              </ul>
            </div>
            <div className="right-side">
              <button type="submit">check availability</button>
            </div>
          </form>
        </div>
      </div>
      {/* section one */}
      <section className="section-one">
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="block-one">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="image mb-30">
                      <img src="assets/images/resource/image-1.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="inner-box mb-30">
                      <div className="image-two">
                        <img src="assets/images/resource/image-2.jpg" alt="" />
                      </div>
                      <div className="image-three">
                        <img src="assets/images/icons/image-1.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="block-two text-center">
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
                <div className="bottom-content justify-content-center">
                  <div className="ratings">4.6</div>
                  <div className="text-three">
                    Users <br /> Ratings
                  </div>
                  <Link href="/restaurant">
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
      {/* section two */}
      <section className="section-two">
        <div className="auto-container">
          <div className="sub-title text-center">
            New Offers <span>-25%</span>
          </div>
          <h2 className="sec-title text-center text-light">
            Featured Specials
          </h2>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="block-three">
                <div className="image">
                  <img src="assets/images/resource/image-3.jpg" alt="" />
                </div>
                <div className="inner-box">
                  <div className="title">Upto 40% Off</div>
                  <div className="text">
                    Kick off summer <br />
                    in NYC
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="block-three">
                <div className="image">
                  <img src="assets/images/resource/image-4.jpg" alt="" />
                </div>
                <div className="inner-box">
                  <div className="title">For This Week</div>
                  <div className="text">
                    $8 Breakfast package <br /> at central market
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="block-three">
                <div className="image">
                  <img src="assets/images/resource/image-5.jpg" alt="" />
                </div>
                <div className="inner-box">
                  <div className="title">Free Membership</div>
                  <div className="text">
                    Win a 3-night <br /> getaway!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section three */}
      <section className="section-three">
        <div className="auto-container">
          <div className="sub-title">Sponsors</div>
          <h2 className="sec-title">Happy Sponsors</h2>
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
        </div>
      </section>
      {/* section four */}
      <section className="section-four">
        <div className="auto-container">
          <div className="sub-title text-center">Gallary</div>
          <h2 className="sec-title text-center">Rooms &amp; Suites</h2>
          <div className="row">
            <div className="col-lg-6">
              <div className="block-four">
                <div className="image">
                  <img src="assets/images/resource/image-6.jpg" alt="" />
                </div>
                <div className="inner-box">
                  <div className="pricing">$100 per day</div>
                  <div className="text">Luxury Bed</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="block-four">
                <div className="image">
                  <img src="assets/images/resource/image-7.jpg" alt="" />
                </div>
                <div className="inner-box">
                  <div className="pricing">$100 per day</div>
                  <div className="text">Duel Bed</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="block-four">
                <div className="image">
                  <img src="assets/images/resource/image-8.jpg" alt="" />
                </div>
                <div className="inner-box">
                  <div className="pricing">$100 per day</div>
                  <div className="text">Single Bed</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="block-four">
                <div className="image">
                  <img src="assets/images/resource/image-9.jpg" alt="" />
                </div>
                <div className="inner-box">
                  <div className="pricing">$100 per day</div>
                  <div className="text">Family Room</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section five */}
      <section className="section-five">
        <div className="auto-container">
          <div className="block-5">
            <div className="row">
              <div className="col-lg-6">
                <div className="block-five">
                  <div className="image">
                    <img src="assets/images/resource/image-7.png" alt="" />
                  </div>
                  <div className="inner-box">
                    <div className="time">Time &amp; Shedule</div>
                    <h3>Opening Hours</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="block-five">
                  <div className="icon">
                    <i className="flaticon-tray" />
                    <span>Dinner: 4:30pm – 10:30pm</span>
                  </div>
                  <div className="icon">
                    <i className="flaticon-martini" />
                    <span>Bar (Drinks + Bites): 4:30pm – 12am</span>
                  </div>
                  <div className="icon">
                    <i className="flaticon-bath-tub" />{" "}
                    <span>Cocktails &amp; Whiskey: Until 2am</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section six */}
      <section className="section-six">
        <div className="auto-container">
          <div className="sub-title text-center">Features</div>
          <h2 className="sec-title text-center">Core Features</h2>
          <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="block-six">
                <div className="icon">
                  <i className="flaticon-wifi-signal" />
                </div>
                <h4>Free Wifi</h4>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="block-six">
                <div className="icon">
                  <i className="flaticon-croissant" />
                </div>
                <h4>Breakfast</h4>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="block-six">
                <div className="icon">
                  <i className="flaticon-weights" />
                </div>
                <h4>Gym Center</h4>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="block-six">
                <div className="icon">
                  <i className="flaticon-massage" />
                </div>
                <h4>Spa &amp; Beauty</h4>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="block-six">
                <div className="icon">
                  <i className="flaticon-game-controller" />
                </div>
                <h4>Gaming Zone</h4>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="block-six">
                <div className="icon">
                  <i className="flaticon-plane" />
                </div>
                <h4>Transport</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section seven */}
      <section className="section-seven">
        <h4 className="d-none">heading</h4>
        <div className="auto-container">
          <div className="block-seven">
            <div className="image">
              <img src="assets/images/resource/video.jpg" alt="" />
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
      </section>
      {/* testimonials section */}
      <section className="testimonials-section">
        <div className="auto-container">
          <div className="top-content">
            <div className="sec-title text-center mb-30">
              <div className="sub-title">Testimonials</div>
              <h2 className="sec-title">User Feedbacks</h2>
            </div>
          </div>
          <div className="row">
            <Swiper
              {...testimonialSlider}
              className="theme_carousel swiper-container"
            >
              <SwiperSlide className="col-lg-12 block-eight text-center">
                <div className="icon">
                  <i className="flaticon-martini" />
                </div>
                <div className="inner-box">
                  <div className="author-info">
                    <div className="thumb">
                      <img src="assets/images/resource/image-8.png" alt="" />
                    </div>
                    <div className="rating-info">
                      <div className="rating">
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="far fa-star" />
                      </div>
                    </div>
                    <h4>“ Quality Drinks &amp; Food ”</h4>
                  </div>
                  <div className="content">
                    <div className="text">
                      Lorem ipsum dolor sit amet, consecte <br /> tur adipiscing
                      elit, sed do eiusmod <br /> tempor incididunt.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="col-lg-12 block-eight text-center">
                <div className="icon">
                  <i className="flaticon-conference" />
                </div>
                <div className="inner-box">
                  <div className="author-info">
                    <div className="thumb">
                      <img src="assets/images/resource/image-9.png" alt="" />
                    </div>
                    <div className="rating-info">
                      <div className="rating">
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="far fa-star" />
                      </div>
                    </div>
                    <h4>“ Dive &amp; Swimming ”</h4>
                  </div>
                  <div className="content">
                    <div className="text">
                      Lorem ipsum dolor sit amet, consecte <br /> tur adipiscing
                      elit, sed do eiusmod <br /> tempor incididunt.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="col-lg-12 block-eight text-center">
                <div className="icon">
                  <i className="flaticon-conference-1" />
                </div>
                <div className="inner-box">
                  <div className="author-info">
                    <div className="thumb">
                      <img src="assets/images/resource/image-10.png" alt="" />
                    </div>
                    <div className="rating-info">
                      <div className="rating">
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="far fa-star" />
                      </div>
                    </div>
                    <h4>“ Easy Transport ”</h4>
                  </div>
                  <div className="content">
                    <div className="text">
                      Lorem ipsum dolor sit amet, consecte <br /> tur adipiscing
                      elit, sed do eiusmod <br /> tempor incididunt.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="col-lg-12 block-eight text-center">
                <div className="icon">
                  <i className="flaticon-martini" />
                </div>
                <div className="inner-box">
                  <div className="author-info">
                    <div className="thumb">
                      <img src="assets/images/resource/image-8.png" alt="" />
                    </div>
                    <div className="rating-info">
                      <div className="rating">
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="far fa-star" />
                      </div>
                    </div>
                    <h4>“ Quality Drinks &amp; Food ”</h4>
                  </div>
                  <div className="content">
                    <div className="text">
                      Lorem ipsum dolor sit amet, consecte <br /> tur adipiscing
                      elit, sed do eiusmod <br /> tempor incididunt.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="col-lg-12 block-eight text-center">
                <div className="icon">
                  <i className="flaticon-conference" />
                </div>
                <div className="inner-box">
                  <div className="author-info">
                    <div className="thumb">
                      <img src="assets/images/resource/image-9.png" alt="" />
                    </div>
                    <div className="rating-info">
                      <div className="rating">
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="far fa-star" />
                      </div>
                    </div>
                    <h4>“ Dive &amp; Swimming ”</h4>
                  </div>
                  <div className="content">
                    <div className="text">
                      Lorem ipsum dolor sit amet, consecte <br /> tur adipiscing
                      elit, sed do eiusmod <br /> tempor incididunt.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="col-lg-12 block-eight text-center">
                <div className="icon">
                  <i className="flaticon-conference-1" />
                </div>
                <div className="inner-box">
                  <div className="author-info">
                    <div className="thumb">
                      <img src="assets/images/resource/image-10.png" alt="" />
                    </div>
                    <div className="rating-info">
                      <div className="rating">
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="far fa-star" />
                      </div>
                    </div>
                    <h4>“ Easy Transport ”</h4>
                  </div>
                  <div className="content">
                    <div className="text">
                      Lorem ipsum dolor sit amet, consecte <br /> tur adipiscing
                      elit, sed do eiusmod <br /> tempor incididunt.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      {/* section nine */}
      <section className="section-nine">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-8">
              <div className="left-column">
                <div className="sub-title text-light">Blog</div>
                <h2 className="sec-title text-light">News &amp; Articles</h2>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="block-nine">
                      <div className="image">
                        <Link href="/blog-details">
                          <a>
                            <img
                              src="assets/images/resource/image-10.jpg"
                              alt=""
                            />
                          </a>
                        </Link>
                        <div className="date">
                          20 <br /> <span>Jun</span>
                        </div>
                      </div>
                      <div className="inner-box">
                        <div className="category">Hotel</div>
                        <h4>
                          <Link href="/blog-details">
                            <a>
                              Choose From a Wide Range of <br /> Properties
                              Which
                            </a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="block-nine">
                      <div className="image">
                        <Link href="/blog-details">
                          <a>
                            <img
                              src="assets/images/resource/image-11.jpg"
                              alt=""
                            />
                          </a>
                        </Link>
                        <div className="date">
                          20 <br /> <span>Jun</span>
                        </div>
                      </div>
                      <div className="inner-box">
                        <div className="category">Hotel</div>
                        <h4>
                          <Link href="/blog-details">
                            <a>
                              Choose From a Wide Range of <br /> Properties
                              Which
                            </a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="right-column">
                <div className="block-ten">
                  <div className="wrap">
                    <div className="inner-box">
                      <div className="category">Hotel</div>
                      <h3>
                        <Link href="/blog-details">
                          <a>
                            Choose From a Wide Range of <br /> Properties Which
                          </a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="block-ten">
                  <div className="wrap">
                    <div className="inner-box">
                      <div className="category">Foods</div>
                      <h3>
                        <Link href="/blog-details">
                          <a>
                            Dutch online travel agency for <br /> lodging
                            reservations
                          </a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="block-ten">
                  <div className="wrap">
                    <div className="inner-box">
                      <div className="category">Drinks</div>
                      <h3>
                        <Link href="/blog-details">
                          <a>
                            Other travel products, and a <br /> subsidiary of
                            Booking
                          </a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section ten */}
      <section className="section-ten">
        <div className="auto-container">
          <div
            className="block-eleven"
            style={{
              backgroundImage: "url(assets/images/resource/image-12.jpg)",
            }}
          >
            <div className="inner-box text-center">
              <div className="logo">
                <img src="assets/images/resource/image-11.png" alt="" />
              </div>
              <h5>Late Breakfast Until 10Am</h5>
              <Link href="/menu">
                <a className="theme-btn btn-style-one">
                  <span>Breakfast Menu</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Index;
