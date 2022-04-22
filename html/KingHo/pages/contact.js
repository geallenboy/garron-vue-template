import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";

const Contact = () => {
  return (
    <Layouts>
      <PageBanner pageName={"Contact"} />
      <section className="section-fifty-six">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-4">
              <div className="block-fifty-six">
                <div className="icon">
                  <i className="flaticon-open" />
                </div>
                <div className="icon-border" />
                <h3>Email Address</h3>
                <div className="text">
                  info@webmail.com <br /> jobs.examplejob@com
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="block-fifty-six">
                <div className="icon">
                  <i className="flaticon-call-2" />
                </div>
                <div className="icon-border" />
                <h3>Phone Number</h3>
                <div className="text">
                  +897 676 5654 654 <br /> +908(097) 564 765 76
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="block-fifty-six">
                <div className="icon">
                  <i className="flaticon-location-2" />
                </div>
                <div className="icon-border" />
                <h3>Office Address</h3>
                <div className="text">
                  12/A, Romania City
                  <br />
                  New Joursey, UK
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* map section */}
      <section className="map-section">
        <h4 className="d-none">heading</h4>
        <div className="contact-map">
          <iframe src="https://maps.google.com/maps?q=new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed" />
        </div>
      </section>
      {/* contact section */}
      <section className="contact-section">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="image">
                <img src="assets/images/resource/image-69.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-block">
                <div className="sub-title">Get In Touch</div>
                <h2 className="sec-title mb-30">Make Appointment</h2>
                <div className="text">
                  We Have Over 40 Payment Ways for Locking the Lowest Room
                  Rates. <br /> No Credit Card Needed! Read Reviews from
                  Verified Guests.
                </div>
                {/* form */}
                <div className="contact-form style-two">
                  <form method="post" onSubmit={(e) => e.preventDefault()}>
                    <div className="row">
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          name="form_name"
                          defaultValue=""
                          placeholder="Enter full name"
                          required=""
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          defaultValue=""
                          placeholder="Enter email address"
                          required=""
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          name="form_phone"
                          defaultValue=""
                          placeholder="Guests"
                          required=""
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          name="form_subject"
                          defaultValue=""
                          placeholder="Select Date"
                          required=""
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <textarea
                          name="form_message"
                          className="form-control"
                          placeholder="Message"
                          defaultValue={""}
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <input
                          id="form_botcheck"
                          name="form_botcheck"
                          className="form-control"
                          type="hidden"
                          defaultValue=""
                        />
                        <button
                          className="theme-btn btn-style-one"
                          type="submit"
                          data-loading-text="Please wait..."
                        >
                          <span>Make Request</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* form end */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Contact;
