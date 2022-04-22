import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";

const Services = () => {
  return (
    <Layouts>
      <PageBanner pageName={"Services"} />
      <section className="section-sixteen">
        <div className="auto-container">
          <div className="row no-gutters">
            <div className="col-lg-6">
              <div className="block-sixteen">
                <div className="offer-title">Parlour &amp; Salon</div>
                <h4>Spa &amp; Massage</h4>
                <div className="text">
                  Check out Hotels Downtown Seattle. Save Time, and Find it{" "}
                  <br />
                  Here. Web, Images &amp; Video. Information 24/7.
                </div>
                <div className="icon">
                  <i className="flaticon-clock" />
                  <span>Open Daily: 7:00am - 03:00am</span>
                </div>
                <div className="icon-two">
                  <i className="flaticon-calendar-1" />
                  <span>Sunday: Off day</span>
                </div>
                <Link href="/contact">
                  <a className="theme-btn btn-style-one">
                    <span>Get Appointment</span>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image">
                <img src="assets/images/resource/image-14.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-6 order-lg-2">
              <div className="block-sixteen">
                <div className="offer-title">Eat &amp; Drinks</div>
                <h4>Restaurant &amp; Bar</h4>
                <div className="text">
                  Check out Hotels Downtown Seattle. Save Time, and Find it{" "}
                  <br />
                  Here. Web, Images &amp; Video. Information 24/7.
                </div>
                <div className="icon">
                  <i className="flaticon-clock" />
                  <span>Open Daily: 7:00am - 03:00am</span>
                </div>
                <div className="icon-two">
                  <i className="flaticon-calendar-1" />
                  <span>Sunday: Off day</span>
                </div>
                <Link href="/contact">
                  <a className="theme-btn btn-style-one">
                    <span>Get Appointment</span>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image">
                <img src="assets/images/resource/image-61.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-6">
              <div className="block-sixteen">
                <div className="offer-title">Rooms</div>
                <h4>Luxary &amp; Family Room</h4>
                <div className="text">
                  Check out Hotels Downtown Seattle. Save Time, and Find it{" "}
                  <br />
                  Here. Web, Images &amp; Video. Information 24/7.
                </div>
                <div className="icon">
                  <i className="flaticon-clock" />
                  <span>Open Daily: 7:00am - 03:00am</span>
                </div>
                <div className="icon-two">
                  <i className="flaticon-calendar-1" />
                  <span>Sunday: Off day</span>
                </div>
                <Link href="/contact">
                  <a className="theme-btn btn-style-one">
                    <span>Get Appointment</span>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image">
                <img src="assets/images/resource/image-62.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-6 order-lg-2">
              <div className="block-sixteen">
                <div className="offer-title">Travelling</div>
                <h4>Easy Transport Way</h4>
                <div className="text">
                  Check out Hotels Downtown Seattle. Save Time, and Find it{" "}
                  <br />
                  Here. Web, Images &amp; Video. Information 24/7.
                </div>
                <div className="icon">
                  <i className="flaticon-clock" />
                  <span>Open Daily: 7:00am - 03:00am</span>
                </div>
                <div className="icon-two">
                  <i className="flaticon-calendar-1" />
                  <span>Sunday: Off day</span>
                </div>
                <Link href="/contact">
                  <a className="theme-btn btn-style-one">
                    <span>Get Appointment</span>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image">
                <img src="assets/images/resource/image-63.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Services;
