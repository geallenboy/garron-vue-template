// import { niceSelect } from "niceselectwithsabuj";
// import niceSelect from "niceselectwithsabuj";
import niceSelect from "niceselectwithsabuj";
import React, { useEffect } from "react";
import ImageView from "../components/ImageView";
import ScrollTop from "../components/ScrollTop";
import VideoPopup from "../components/VideoPopup";
import { animation, stickyNav } from "../utils";
import Footer from "./footers/Footer";
import Header from "./headers/Header";

const Layouts = ({
  children,
  noBg,
  extraCls,
  noHeader,
  noFooter,
  headernumber,
}) => {
  useEffect(() => {
    animation();
    niceSelect({ withoutwide: true });
    window.addEventListener("scroll", stickyNav);
  }, []);

  return (
    <div className="page-wrapper">
      <ImageView />
      <VideoPopup />
      {!noHeader && <Header headernumber={headernumber} />}
      {children}
      {!noFooter && <Footer noBg={noBg} extraCls={extraCls} />}
      <ScrollTop />
    </div>
  );
};
export default Layouts;
