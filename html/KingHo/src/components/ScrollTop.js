import React, { useEffect } from "react";

const ScrollTop = () => {
  useEffect(() => {
    let scrollUp = document.getElementById("scroll-top");

    window.addEventListener("scroll", () => {
      let st = window.scrollY;
      if (st > 110) {
        scrollUp.style.display = "inline-block";
      } else {
        scrollUp.style.display = "none";
      }
    });
  }, []);
  const onClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className="scroll-to-top scroll-to-target"
      id="scroll-top"
      data-target="html"
      onClick={() => onClick()}
    >
      <span className="fas fa-arrow-up" />
    </div>
  );
};
export default ScrollTop;
