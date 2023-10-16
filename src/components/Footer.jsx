import React from "react";
import { BsInstagram, BsYoutube, BsTiktok } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <a
          href="https://www.instagram.com/corne.cc/"
          target="_blank"
          className="social-media__link"
        >
          <BsInstagram className="social-media__icon" size={40} />
        </a>
        <a
          href="https://youtube.com/@corne_cc"
          target="_blank"
          className="social-media__link"
        >
          {" "}
          <BsYoutube className="social-media__icon" size={40} />
        </a>
        <a
          href="https://www.tiktok.com/@corne_cc?_t=8d7QwuhraWk&_r=1"
          target="_blank"
          className="social-media__link"
        >
          {" "}
          <BsTiktok className="social-media__icon" size={40} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
