import Link from "next/link";
import React, { useEffect, useState } from "react";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";
import { getPagination, pagination } from "../src/utils";

const Blog = () => {
  let sort = 2;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination(".blog-post-item", sort, active);
    let list = document.querySelectorAll(".blog-post-item");
    setstate(getPagination(list.length, sort));
  }, [active]);
  return (
    <Layouts>
      <PageBanner pageName={"Blog"} />
      <div className="sidebar-page-container">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-8">
              {/* News Block Two */}
              <div className="news-block-two blog-post-item">
                <div className="inner-box">
                  <div className="image">
                    <a href="#">
                      <img
                        className="lazy-image owl-lazy"
                        src="assets/images/news/news-1.jpg"
                        data-src="assets/images/resource/news-4.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="lower-content">
                    <div className="category">Business</div>
                    <ul className="post-meta">
                      <li>
                        <a href="#">
                          <i className="far fa-eye" />
                          332 Views
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-comments" />
                          35 Comments
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-calendar-alt" />
                          26th March 2020
                        </a>
                      </li>
                    </ul>
                    <h2>
                      <Link href="/blog-details">
                        <a>
                          Lorem ipsum dolor sit amet, consecte <br />
                          cing elit, sed do eiusmod tempor.
                        </a>
                      </Link>
                    </h2>
                    <div className="text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore.
                    </div>
                    <div className="wrapper">
                      <div className="author-box">
                        <div className="thumb">
                          <img src="assets/images/news/author.png" alt="" />
                        </div>
                        <h5>by Hetmayar</h5>
                      </div>
                      <div className="read-more">
                        <Link href="/blog-details">
                          <a>
                            <i className="fal fa-arrow-right" />
                            Read More
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* News Block Two */}
              <div className="news-block-two blog-post-item">
                <div className="inner-box">
                  <div className="image">
                    <a href="#">
                      <img src="assets/images/news/news-2.jpg" alt="" />
                    </a>
                  </div>
                  <div className="lower-content">
                    <div className="category">Business</div>
                    <ul className="post-meta">
                      <li>
                        <a href="#">
                          <i className="far fa-eye" />
                          332 Views
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-comments" />
                          35 Comments
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-calendar-alt" />
                          26th March 2020
                        </a>
                      </li>
                    </ul>
                    <h2>
                      <Link href="/blog-details">
                        <a>
                          Adipisicing elit, sed do eiusmod tempor <br />{" "}
                          incididunt ut labore et dolore.
                        </a>
                      </Link>
                    </h2>
                    <div className="text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore.
                    </div>
                    <div className="wrapper">
                      <div className="author-box">
                        <div className="thumb">
                          <img src="assets/images/news/author.png" alt="" />
                        </div>
                        <h5>by Hetmayar</h5>
                      </div>
                      <div className="read-more">
                        <Link href="/blog-details">
                          <a>
                            <i className="fal fa-arrow-right" />
                            Read More
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* News Block Two */}
              <div className="news-block-two blog-post-item">
                <div className="inner-box">
                  <div className="image">
                    <a href="#">
                      <img src="assets/images/news/news-3.jpg" alt="" />
                    </a>
                  </div>
                  <div className="lower-content">
                    <div className="category">Business</div>
                    <ul className="post-meta">
                      <li>
                        <a href="#">
                          <i className="far fa-eye" />
                          332 Views
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-comments" />
                          35 Comments
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-calendar-alt" />
                          26th March 2020
                        </a>
                      </li>
                    </ul>
                    <h2>
                      <Link href="/blog-details">
                        <a>
                          Magna aliqua. Ut enim ad minim venia <br />
                          m, quis nostrud exercitation ullamco
                        </a>
                      </Link>
                    </h2>
                    <div className="text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore.
                    </div>
                    <div className="wrapper">
                      <div className="author-box">
                        <div className="thumb">
                          <img src="assets/images/news/author.png" alt="" />
                        </div>
                        <h5>by Hetmayar</h5>
                      </div>
                      <div className="read-more">
                        <Link href="/blog-details">
                          <a>
                            <i className="fal fa-arrow-right" />
                            Read More
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* News Block Four */}
              <div className="news-block-four blog-post-item">
                <div
                  className="inner-box"
                  style={{
                    backgroundImage: "url(assets/images/news/news-bg.jpg)",
                  }}
                >
                  <div className="lower-content">
                    <div className="icon">
                      <i className="flaticon-quote" />
                    </div>
                    <h2>
                      <Link href="/blog-details">
                        <a>
                          Excepteur sint occaecat cupida <br /> tat non
                          proident, sunt in.
                        </a>
                      </Link>
                    </h2>
                    <ul className="post-meta">
                      <li>
                        <a href="#">
                          <i className="far fa-eye" />
                          332 Views
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-comments" />
                          35 Comments
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-calendar-alt" />
                          26th March 2020
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* News Block Two */}
              <div
                className="news-block-two blog-post-item"
                style={{
                  backgroundImage: "url(assets/images/news/news-bg-1.jpg)",
                }}
              >
                <div className="inner-box">
                  <div className="lower-content">
                    <div className="category">Hotel</div>
                    <h2>
                      <Link href="/blog-details">
                        <a>
                          Laboris nisi ut aliquip ex ea commodo <br />
                          consequat. Duis aute irure dolor.
                        </a>
                      </Link>
                    </h2>
                    <ul className="post-meta">
                      <li>
                        <a href="#">
                          <i className="far fa-eye" />
                          332 Views
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-comments" />
                          35 Comments
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-calendar-alt" />
                          26th March 2020
                        </a>
                      </li>
                    </ul>
                    <div className="wrapper"></div>
                  </div>
                </div>
              </div>
              <div className="page-pagination">
                <ul className="clearfix">
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setActive(active === 1 ? 1 : active - 1);
                      }}
                    >
                      <span className="fas fa-angle-double-left" />
                    </a>
                  </li>

                  {state &&
                    state.map((s, i) => (
                      <li
                        key={i}
                        className={` ${active === s ? "active" : ""}`}
                      >
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setActive(s);
                          }}
                        >
                          {s}
                        </a>
                      </li>
                    ))}
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setActive(
                          active === state.length ? state.length : active + 1
                        );
                      }}
                    >
                      <span className="fas fa-angle-double-right" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="sidebar">
                {/* About Widget */}
                <div className="sidebar-widget about-me">
                  <div className="sidebar-title">
                    <h3>About Me</h3>
                  </div>
                  <div className="widget-content">
                    <div className="image">
                      <img src="assets/images/news/author-5.png" alt="" />
                    </div>
                    <h4>Rosalina D. Willaimson</h4>
                    <div className="text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore.
                    </div>
                    <ul className="social-links">
                      <li>
                        <a href="#">
                          <span className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fab fa-behance" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fab fa-youtube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Search */}
                <div className="sidebar-widget search-box">
                  <div className="sidebar-title">
                    <h3>Search Objects</h3>
                  </div>
                  <form method="post" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                      <input
                        type="search"
                        name="search-field"
                        defaultValue=""
                        placeholder="Search your keyword..."
                        required=""
                      />
                      <button type="submit">
                        <span className="icon far fa-search" />
                      </button>
                    </div>
                  </form>
                </div>
                {/* Post Widget */}
                <div className="sidebar-widget popular-posts">
                  <div className="sidebar-title">
                    <h3>Popular Feeds</h3>
                  </div>
                  <div className="widget-content">
                    {/*News Post*/}
                    <div className="news-post">
                      <div className="post-thumb">
                        <Link href="/blog-details">
                          <a>
                            <img
                              className="lazy-image loaded"
                              src="assets/images/news/author-1.png"
                              data-src="assets/images/resource/thumb-8.jpg"
                              alt=""
                            />
                          </a>
                        </Link>
                      </div>
                      <h4>
                        <Link href="/blog-details">
                          <a>
                            Lorem ipsum dolor sit <br />
                            cing elit, sed do.{" "}
                          </a>
                        </Link>
                      </h4>
                      <div className="date">
                        <span className="fa fa-calendar-alt" /> Feb 25, 2020
                      </div>
                    </div>
                    {/*News Post*/}
                    <div className="news-post">
                      <div className="post-thumb">
                        <Link href="/blog-details">
                          <a>
                            <img
                              className="lazy-image loaded"
                              src="assets/images/news/author-2.png"
                              data-src="assets/images/resource/thumb-9.jpg"
                              alt=""
                            />
                          </a>
                        </Link>
                      </div>
                      <h4>
                        <Link href="/blog-details">
                          <a>
                            Lorem ipsum dolor sit <br />
                            cing elit, sed do.
                          </a>
                        </Link>
                      </h4>
                      <div className="date">
                        <span className="fa fa-calendar-alt" /> Feb 20, 2020
                      </div>
                    </div>
                    {/*News Post*/}
                    <div className="news-post">
                      <div className="post-thumb">
                        <Link href="/blog-details">
                          <a>
                            <img
                              className="lazy-image loaded"
                              src="assets/images/news/author-3.png"
                              data-src="assets/images/resource/thumb-10.jpg"
                              alt=""
                            />
                          </a>
                        </Link>
                      </div>
                      <h4>
                        <Link href="/blog-details">
                          <a>
                            Lorem ipsum dolor sit <br /> cing elit, sed do.
                          </a>
                        </Link>
                      </h4>
                      <div className="date">
                        <span className="fa fa-calendar-alt" /> Feb 14, 2020
                      </div>
                    </div>
                  </div>
                </div>
                {/* Category Widget */}
                <div className="sidebar-widget categories">
                  <div className="sidebar-title">
                    <h3>Categories</h3>
                  </div>
                  <div className="widget-content">
                    <ul>
                      <li className="current">
                        <Link href="/blog-details">
                          <a>Hotel</a>
                        </Link>{" "}
                        <span className="total-post">26</span>
                      </li>
                      <li>
                        <Link href="/blog-details">
                          <a>Travel</a>
                        </Link>{" "}
                        <span className="total-post">30</span>
                      </li>
                      <li>
                        <Link href="/blog-details">
                          <a>Creative</a>
                        </Link>{" "}
                        <span className="total-post">71</span>
                      </li>
                      <li>
                        <Link href="/blog-details">
                          <a>Resturant</a>
                        </Link>{" "}
                        <span className="total-post">68</span>
                      </li>
                      <li>
                        <Link href="/blog-details">
                          <a>Technology</a>
                        </Link>
                        <span className="total-post">70</span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Social Icon */}
                <div className="sidebar-widget social-links-widget">
                  <div className="sidebar-title">
                    <h3>Never Miss News</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="social-links">
                      <li>
                        <a href="#">
                          <span className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fab fa-behance" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fab fa-pinterest-p" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Twitter Widget */}
                <div className="sidebar-widget twitter-widget">
                  <div className="sidebar-title">
                    <h3>Twitter Feeds</h3>
                  </div>
                  <div className="widget-content">
                    <div className="post">
                      <div className="icon">
                        <span className="fab fa-twitter" />
                      </div>
                      <div className="text">
                        Rescue - #Gutenberg ready @ wordpress Theme for Creative
                        Bloggers available on @ ThemeForest
                        https://t.co/2r1POjOjgV C… https://t.co/rDAnPyClu1
                      </div>
                      <div className="date">Jan 25, 2020</div>
                    </div>
                    <div className="post">
                      <div className="icon">
                        <span className="fab fa-twitter" />
                      </div>
                      <div className="text">
                        Rescue - #Gutenberg ready @ wordpress Theme for Creative
                        Bloggers available on @ ThemeForest
                        https://t.co/2r1POjOjgV C… https://t.co/rDAnPyClu1
                      </div>
                      <div className="date">Jan 25, 2020</div>
                    </div>
                  </div>
                </div>
                {/* Gallery Widget */}
                <div className="sidebar-widget instagram-widget">
                  <div className="sidebar-title">
                    <h3>Instagram Feeds</h3>
                  </div>
                  <div className="inner-box">
                    <div className="wrapper-box">
                      <div className="image">
                        <img src="assets/images/news/news-ins-2.jpg" alt="" />
                        <div className="overlay-link">
                          <a
                            href="assets/images/gallery/instagram-1.jpg"
                            className="lightbox-image"
                            data-fancybox="gallery"
                          >
                            <span className="fa fa-plus" />
                          </a>
                        </div>
                      </div>
                      <div className="image">
                        <img src="assets/images/news/news-ins-3.jpg" alt="" />
                        <div className="overlay-link">
                          <a
                            href="assets/images/gallery/instagram-2.jpg"
                            className="lightbox-image"
                            data-fancybox="gallery"
                          >
                            <span className="fa fa-plus" />
                          </a>
                        </div>
                      </div>
                      <div className="image">
                        <img src="assets/images/news/news-ins-4.jpg" alt="" />
                        <div className="overlay-link">
                          <a
                            href="assets/images/gallery/instagram-3.jpg"
                            className="lightbox-image"
                            data-fancybox="gallery"
                          >
                            <span className="fa fa-plus" />
                          </a>
                        </div>
                      </div>
                      <div className="image">
                        <img src="assets/images/news/news-ins-5.jpg" alt="" />
                        <div className="overlay-link">
                          <a
                            href="assets/images/gallery/instagram-4.jpg"
                            className="lightbox-image"
                            data-fancybox="gallery"
                          >
                            <span className="fa fa-plus" />
                          </a>
                        </div>
                      </div>
                      <div className="image">
                        <img src="assets/images/news/news-ins-6.jpg" alt="" />
                        <div className="overlay-link">
                          <a
                            href="assets/images/gallery/instagram-5.jpg"
                            className="lightbox-image"
                            data-fancybox="gallery"
                          >
                            <span className="fa fa-plus" />
                          </a>
                        </div>
                      </div>
                      <div className="image">
                        <img src="assets/images/news/news-ins-7.jpg" alt="" />
                        <div className="overlay-link">
                          <a
                            href="assets/images/gallery/instagram-6.jpg"
                            className="lightbox-image"
                            data-fancybox="gallery"
                          >
                            <span className="fa fa-plus" />
                          </a>
                        </div>
                      </div>
                      <div className="image">
                        <img src="assets/images/news/news-ins-8.jpg" alt="" />
                        <div className="overlay-link">
                          <a
                            href="assets/images/gallery/instagram-7.jpg"
                            className="lightbox-image"
                            data-fancybox="gallery"
                          >
                            <span className="fa fa-plus" />
                          </a>
                        </div>
                      </div>
                      <div className="image">
                        <img src="assets/images/news/news-ins-9.jpg" alt="" />
                        <div className="overlay-link">
                          <a
                            href="assets/images/gallery/instagram-8.jpg"
                            className="lightbox-image"
                            data-fancybox="gallery"
                          >
                            <span className="fa fa-plus" />
                          </a>
                        </div>
                      </div>
                      <div className="image">
                        <img src="assets/images/news/news-ins.jpg" alt="" />
                        <div className="overlay-link">
                          <a
                            href="assets/images/gallery/instagram-1.jpg"
                            className="lightbox-image"
                            data-fancybox="gallery"
                          >
                            <span className="fa fa-plus" />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* /.gallery-wrapper */}
                  </div>
                </div>
                {/* Tags Widget */}
                <div className="sidebar-widget popular-tags">
                  <div className="sidebar-title">
                    <h3>Popular Tags</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="clearfix">
                      <li>
                        <Link href="/blog-details">
                          <a>
                            <span>Rooms</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-details">
                          <a>
                            <span>Hotel</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-details">
                          <a>
                            <span>Places</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-details">
                          <a>
                            <span>Booking</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-details">
                          <a>
                            <span>Resort</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-details">
                          <a>
                            <span>Airport</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-details">
                          <a>
                            <span>Reservation</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-details">
                          <a>
                            <span>Resturant</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-details">
                          <a>
                            <span>Accommodation</span>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};
export default Blog;
