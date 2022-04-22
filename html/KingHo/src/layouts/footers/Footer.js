import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { footerSlider } from "../../sliderProps";

const Footer = ({ noBg, extraCls }) => {
  return (
    <footer
      className={`main-footer ${extraCls ? extraCls : "style-two"}`}
      style={{
        background: noBg ? null : `url(assets/images/background/bg-1.jpg)`,
      }}
    >
      <div className="auto-container">
        <div className="widget-wrapper">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-logo">
                <img src="assets/images/footer-logo.png" alt="" />
              </div>
            </div>
            <div className="column col-lg-3 col-md-6">
              <div className="widget links-widget">
                <h4>Pages</h4>
                <div className="row">
                  <div className="col-sm-6">
                    <ul>
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">Approach</a>
                      </li>
                      <li>
                        <a href="#">People</a>
                      </li>
                      <li>
                        <a href="#">Reviews</a>
                      </li>
                      <li>
                        <a href="#">Insights</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul>
                      <li>
                        <a href="#">Services</a>
                      </li>
                      <li>
                        <a href="#">Our Menus</a>
                      </li>
                      <li>
                        <a href="#">Shop</a>
                      </li>
                      <li>
                        <a href="#">Contacts</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget text-widget">
                <h4>Our Awards</h4>
                <div className="text">
                  When your people get up every day <br /> wanting to come to
                  work.
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="logo">
                      <img src="assets/images/resource/image-15.png" alt="" />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="logo">
                      <img src="assets/images/resource/image-16.png" alt="" />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="logo">
                      <img src="assets/images/resource/image-17.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget contact-widget">
                <h4>Get In Touch</h4>
                <div className="text">
                  Welcome to Alloggio, where comfort is everything.
                </div>
                <ul>
                  <li>
                    <i className="fal fa-phone" />
                    <a href="tel:90809875769">908-098-757-69</a>
                  </li>
                  <li>
                    <i className="fal fa-envelope" />
                    <a href="mailto:info@webmail.com">info@webmail.com</a>
                  </li>
                  <li>
                    <i className="fal fa-map-marker-alt" /> 13/A, Miranda City
                    Hall, NYC
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="wrapper-box">
            <div className="copyright">
              <div className="text">Copyright Kingho. All right reserved.</div>
            </div>
            <div className="brand-logo">
              <Swiper
                {...footerSlider}
                className="theme_carousel swiper-container"
              >
                <SwiperSlide className="logo">
                  <img src="assets/images/resource/image-18.png" alt="" />
                </SwiperSlide>
                <SwiperSlide className="logo">
                  <img src="assets/images/resource/image-19.png" alt="" />
                </SwiperSlide>
                <SwiperSlide className="logo">
                  <img src="assets/images/resource/image-20.png" alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
