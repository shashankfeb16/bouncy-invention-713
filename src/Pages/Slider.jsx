import React from "react";
import "./slider.css";
import left_image from "../assets/left_image.png";
import middle_image from "../assets/middle_image.png";
import right_image from "../assets/right_image.png";
import right_arrow from "../assets/right_arrow.png";
import left_arrow from "../assets/left_arrow.png";
import table_image from "../assets/table_image.png";

const Slider = () => {
  return (
    <>
      <div id="maroon">
        <img alt="left" id="btn_prev" src={left_arrow} />
        <img alt="right" id="left" src={left_image} />
        <img alt="match" id="matches" src={middle_image} />
        <img alt="right" id="right" src={right_image} />
        <img alt="right-arror" id="btn_next" src={right_arrow} />
      </div>
      <div id="table">
        <img alt="bigImage" id="table_image" src={table_image} />
      </div>
    </>
  );
};

export default Slider;
