import React from 'react'
import "./Footer.css"
import footer_logo from "../Assets/logo_big.png"
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPY</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <FaInstagram />
            </div>
            <div className="footer-icons-container">
                <FaLinkedin />
            </div>
            <div className="footer-icons-container">
                <FaGithub />
            </div>
        </div>
    </div>
  )
}

export default Footer