import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";

const RoomDetails = () => {
  const [activeAcc, setActiveAcc] = useState("acc-1");
  const setAcc = (value) => setActiveAcc(value === activeAcc ? "" : value),
    activeLi = (value) => (value === activeAcc ? "active-block" : ""),
    activebtn = (value) => (value === activeAcc ? "active" : ""),
    activeContent = (value) =>
      value === activeAcc ? { display: "block" } : { display: "none" };
  return (
    <Layouts>
      <PageBanner pageName={"Room Details"} />
      <section className="section-thirty-nine">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="block-thirty-nine">
                <div className="image">
                  <img src="assets/images/resource/image-57.jpg" alt="" />
                </div>
                <div className="image-two">
                  <img src="assets/images/resource/image-58.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image">
                <img src="assets/images/resource/image-59.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="image">
                <img src="assets/images/resource/image-60.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="block-forty">
                <div className="pricing">$200 / Night</div>
                <h4>Poxicon Luxary Room</h4>
                <ul>
                  <li>
                    <i className="flaticon-preview" />
                    <span>80m2</span>
                  </li>
                  <li>
                    <i className="flaticon-bed" />
                    <span>4 Bed</span>
                  </li>
                  <li>
                    <i className="flaticon-bath-tub" />
                    <span>3 Bathrooms</span>
                  </li>
                </ul>
                <div className="text">
                  Instantly access Secret Prices when you download our app. Look
                  out for ’Your Secret Price’ on selected hotels and save up to
                  40%. We don’t share Secret Prices with other sites: these are
                  lower prices that we’ve specially negotiated for our customers
                  who have subscribed to our emails, downloaded our app or those
                  who have joined Hotels.com Rewards.
                </div>
                <div className="text-two">
                  Collect 10 stamps, get 1 reward* night with Hotels.com
                  Rewards. Whether it’s a weekend break business trip or a
                  family holiday, collect 1 stamp for every night stayed – even
                  when you book for others. Collect stamps after your stay at
                  over 1,000,000 properties around the world and redeem reward
                  nights anytime.
                </div>
                <div className="bottom-border">
                  <h3>Property Highlights</h3>
                </div>
                <div className="text-three">
                  Instantly access Secret Prices when you download our app. Look
                  out for ’Your Secret Price’ on selected hotels and save up to
                  40%. We don’t share Secret Prices with other sites: these are
                  lower prices that we’ve specially negotiated for our customers
                  who have subscribed to our emails, downloaded our app or those
                  who have joined Hotels.com Rewards.
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="block-40">
                    <div className="icon">
                      <i className="flaticon-like" />
                    </div>
                    <div className="content-box">
                      <div className="author">Walkable</div>
                      <div className="designation">6,850 positive mentions</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="block-40">
                    <div className="icon">
                      <i className="flaticon-like" />
                    </div>
                    <div className="content-box">
                      <div className="author">Launch Restaurant</div>
                      <div className="designation">6,850 positive mentions</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="block-40">
                    <div className="icon">
                      <i className="flaticon-like" />
                    </div>
                    <div className="content-box">
                      <div className="author">Open 5 more hotel</div>
                      <div className="designation">6,850 positive mentions</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-border">
                <h3>Property Highlights</h3>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="block-41">
                    <h5>Feel At Home</h5>
                    <ul>
                      <li>
                        <i className="flaticon-check" />
                        <span>Free cribs/infant beds</span>{" "}
                      </li>
                      <li>
                        <i className="flaticon-check" />
                        <span>Connecting/adjoining rooms available</span>{" "}
                      </li>
                      <li>
                        <i className="flaticon-check" />
                        <span>Private bathroom</span>{" "}
                      </li>
                      <li>
                        <i className="flaticon-check" />
                        <span>Premium TV channels</span>{" "}
                      </li>
                      <li>
                        <i className="flaticon-check" />
                        <span>Television</span>{" "}
                      </li>
                      <li>
                        <i className="flaticon-check" />
                        <span>Free toiletries</span>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="block-41">
                    <h5>Feel At Home</h5>
                    <ul>
                      <li>
                        <i className="flaticon-check" />
                        <span>Free cribs/infant beds</span>{" "}
                      </li>
                      <li>
                        <i className="flaticon-check" />
                        <span>Connecting/adjoining rooms available</span>{" "}
                      </li>
                      <li>
                        <i className="flaticon-check" />
                        <span>Private bathroom</span>{" "}
                      </li>
                      <li>
                        <i className="flaticon-check" />
                        <span>Premium TV channels</span>{" "}
                      </li>
                      <li>
                        <i className="flaticon-check" />
                        <span>Television</span>{" "}
                      </li>
                      <li>
                        <i className="flaticon-check" />
                        <span>Free toiletries</span>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="block-42">
                <div className="icon-two">
                  <i className="flaticon-moon" />{" "}
                </div>
                <div className="cta-box">
                  <h6>You’ll collect 1 stamp after your 1-night stay</h6>
                  <div className="cta-text">
                    Remember, collect 10 stamps, get 1 reward* night
                  </div>
                </div>
              </div>
              <div className="bottom-border">
                <h3>Additional Services</h3>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="block-43">
                    <div className="icon-three">
                      <i className="flaticon-laundry" />
                      <div className="title">Laundry Service</div>
                    </div>
                  </div>
                  <div className="pricing-two">$19.00</div>
                </div>
                <div className="col-md-3">
                  <div className="block-43">
                    <div className="icon-three">
                      <i className="flaticon-breakfast" />
                      <div className="title">Food &amp; Snacks</div>
                    </div>
                  </div>
                  <div className="pricing-two">$19.00</div>
                </div>
                <div className="col-md-3">
                  <div className="block-43">
                    <div className="icon-three">
                      <i className="flaticon-plane" />
                      <div className="title">Airport-Pickup</div>
                    </div>
                  </div>
                  <div className="pricing-two">$19.00</div>
                </div>
                <div className="col-md-3">
                  <div className="block-43">
                    <div className="icon-three">
                      <i className="flaticon-pool" />
                      <div className="title">Swiming Night</div>
                    </div>
                  </div>
                  <div className="pricing-two">$19.00</div>
                </div>
              </div>
              {/* accordion start */}
              <Accordion
                as={"ul"}
                className="accordion-box"
                defaultActiveKey="acc-1"
              >
                {/*Accordion Block*/}
                <li className={`accordion block ${activeLi("acc-1")}`}>
                  <Accordion.Toggle
                    as={"div"}
                    eventKey="acc-1"
                    className={`acc-btn ${activebtn(`acc-1`)}`}
                    onClick={() => setAcc("acc-1")}
                  >
                    <div className="icon-outer">
                      <span className="fal fa-plus" />
                    </div>
                    Is parking offered on site at Excalibur Hotel &amp; Casino?
                  </Accordion.Toggle>
                  <Accordion.Collapse
                    eventKey="acc-1"
                    // className={`acc-content `}
                    // style={activeContent("acc-1")}
                  >
                    <div className="content">
                      <div className="text">
                        Very clean facility rooms are large and comfortable
                        check in although very nice people left a lot to be{" "}
                        <br /> desired as it took 40 minutes waiting in a que
                        like Disney Land The buffet was flavorless and food dry
                        the shops do not have prices marked on beverages and
                        snacks so it’s a little bit of a surprise to pay 6
                        dollars for a 99 cent soda Plus the Starbucks in food
                        com.
                      </div>
                    </div>
                  </Accordion.Collapse>
                </li>
                {/*Accordion Block*/}
                <li className={`accordion block ${activeLi("acc-2")}`}>
                  <Accordion.Toggle
                    as={"div"}
                    eventKey="acc-2"
                    className={`acc-btn ${activebtn(`acc-2`)}`}
                    onClick={() => setAcc("acc-2")}
                  >
                    <div className="icon-outer">
                      <span className="fal fa-plus" />
                    </div>
                    Is there a pool at Excalibur Hotel &amp; Casino?{" "}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="acc-2">
                    <div className="content">
                      <div className="text">
                        Very clean facility rooms are large and comfortable
                        check in although very nice people left a lot to be{" "}
                        <br /> desired as it took 40 minutes waiting in a que
                        like Disney Land The buffet was flavorless and food dry
                        the shops do not have prices marked on beverages and
                        snacks so it’s a little bit of a surprise to pay 6
                        dollars for a 99 cent soda Plus the Starbucks in food
                        com.
                      </div>
                    </div>
                  </Accordion.Collapse>
                </li>
                {/*Accordion Block*/}
                <li className={`accordion block ${activeLi("acc-3")}`}>
                  <Accordion.Toggle
                    as={"div"}
                    eventKey="acc-3"
                    className={`acc-btn ${activebtn(`acc-3`)}`}
                    onClick={() => setAcc("acc-3")}
                  >
                    <div className="icon-outer">
                      <span className="fal fa-plus" />
                    </div>
                    Are there restaurants at or near Excalibur Hotel &amp;
                    Casino?{" "}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="acc-3">
                    <div className="content">
                      <div className="text">
                        Very clean facility rooms are large and comfortable
                        check in although very nice people left a lot to be{" "}
                        <br /> desired as it took 40 minutes waiting in a que
                        like Disney Land The buffet was flavorless and food dry
                        the shops do not have prices marked on beverages and
                        snacks so it’s a little bit of a surprise to pay 6
                        dollars for a 99 cent soda Plus the Starbucks in food
                        com.
                      </div>
                    </div>
                  </Accordion.Collapse>
                </li>
                {/*Accordion Block*/}
                <li className={`accordion block ${activeLi("acc-4")}`}>
                  <Accordion.Toggle
                    as={"div"}
                    eventKey="acc-4"
                    className={`acc-btn ${activebtn(`acc-4`)}`}
                    onClick={() => setAcc("acc-4")}
                  >
                    <div className="icon-outer">
                      <span className="fal fa-plus" />
                    </div>
                    Is there an onsite casino at Excalibur Hotel &amp; Casino?
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="acc-4">
                    <div className="content">
                      <div className="text">
                        Very clean facility rooms are large and comfortable
                        check in although very nice people left a lot to be{" "}
                        <br /> desired as it took 40 minutes waiting in a que
                        like Disney Land The buffet was flavorless and food dry
                        the shops do not have prices marked on beverages and
                        snacks so it’s a little bit of a surprise to pay 6
                        dollars for a 99 cent soda Plus the Starbucks in food
                        com.
                      </div>
                    </div>
                  </Accordion.Collapse>
                </li>
                {/*Accordion Block*/}
                <li className={`accordion block ${activeLi("acc-5")}`}>
                  <Accordion.Toggle
                    as={"div"}
                    eventKey="acc-5"
                    className={`acc-btn ${activebtn(`acc-5`)}`}
                    onClick={() => setAcc("acc-5")}
                  >
                    <div className="icon-outer">
                      <span className="fal fa-plus" />
                    </div>
                    What is there to do at Excalibur Hotel &amp; Casino and
                    nearby?
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="acc-5">
                    <div className="content">
                      <div className="text">
                        Very clean facility rooms are large and comfortable
                        check in although very nice people left a lot to be{" "}
                        <br /> desired as it took 40 minutes waiting in a que
                        like Disney Land The buffet was flavorless and food dry
                        the shops do not have prices marked on beverages and
                        snacks so it’s a little bit of a surprise to pay 6
                        dollars for a 99 cent soda Plus the Starbucks in food
                        com.
                      </div>
                    </div>
                  </Accordion.Collapse>
                </li>
              </Accordion>
              {/* accordion end */}
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default RoomDetails;
