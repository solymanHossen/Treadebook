import React from 'react';
import "./Footer.css"
import { FiFacebook } from "react-icons/fi"
import { AiFillInstagram, AiFillGithub } from "react-icons/ai"
import logo2 from "../../Asset/Vector.png"

const Footer = () => {
  return (
    <div className="footer-bgc">
      <div className="container container-flex-footer">

        <div className="treadebook-content">
          <p className='logo-content treadebook-logo-footer'>Treadebook <span><img src={logo2} alt="logo" /></span></p>
          <p className='footer-content-p'>Book your trip in minute, get full
            Control for much longer.</p>
          <div className="social-icon">
            <FiFacebook className='fb-icon' />
            <AiFillInstagram className='instgrm-icon' />
            <AiFillGithub  className='github-icon'/>
          </div>
        </div>

        <div className="footer-information">
          <ul>
            <li className='bular-text'>Company </li>
            <li>About </li>
            <li>Careers </li>
            <li>Logistic </li>
            <li>Privacy & Policy</li>
          </ul>
          <ul>
            <li  className='bular-text'>Contact </li>
            <li>Help/FAQ </li>
            <li>Press </li>
            <li>Affilates </li>

          </ul>
          <ul>
            <li  className='bular-text'>More </li>
            <li>Press Centre </li>
            <li>Our Blog </li>
            <li>Low fare tips </li>

          </ul>

        </div>




      </div>


    </div>
  );
};

export default Footer;