import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="div_1">
          <img src="https://www.cricket.com/static/svgs/cricket-logo.svg" />
          <p>Cricket like never before</p>
        </div>

        <div className="div_2">
          <a href="#">Term of use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookies Policy</a>
        </div>
        <div className="div_3">
          <h5>follow us on</h5>
          <p>@2020 Cricket.com | All right reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
