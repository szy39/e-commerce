import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPY</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <a href="https://www.instagram.com/_eymenylmz_/">
          <FaInstagram className="icons" />
          </a>
        </div>
        <div className="footer-icons-container">
          <a href="https://www.linkedin.com/in/eyilmaz39">
          <FaLinkedin className="icons" />
          </a>
        </div>
        <div className="footer-icons-container">
          <a
            href="https://github.com/szy39"
          >
            <FaGithub className="icons" />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2025 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;