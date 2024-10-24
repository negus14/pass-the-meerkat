import React from 'react';
import { FaTiktok, FaInstagram, FaYoutube, FaTwitter, FaFacebook } from 'react-icons/fa';
import './Footer.css'; // Make sure to import your CSS

const Footer = () => {
  return (
    <div className="footer">
      <a href="https://www.tiktok.com/@9inedegrees?lang=en" target="_blank" rel="noopener noreferrer">
        <FaTiktok className="icon tiktok-icon" size={40} title="TikTok" color="white"/>
      </a>
      <a href="https://www.instagram.com/passthemeerkat/?hl=en" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="icon instagram-icon" size={40} title="Instagram" color="white"/>
      </a>
      <a href="https://www.youtube.com/@9ineDegrees" target="_blank" rel="noopener noreferrer">
        <FaYoutube className="icon youtube-icon" size={40} title="YouTube"  color="white"/>
      </a>
      <a href="https://x.com/passthemeerkat?lang=en" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="icon twitter-icon" size={40} title="X (formerly Twitter)"  color="white"/>
      </a>
      <a href="https://www.facebook.com/passthemeerkat/" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="icon facebook-icon" size={40} title="Facebook"  color="white"/>
      </a>
    </div>
  );
};

export default Footer;
