import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  <div className="Footer-container">
    <hr />
    <div className="footer">
      <img src={Github} alt="Github" />
      <img src={Instagram} alt="Instagram" />
      <img src={Linkedin} alt="Linkedin" />
    </div>
    <div className="logo-f">
      <img src={Logo} alt="" className="src" />
    </div>
  </div>;
};

export default Footer;
