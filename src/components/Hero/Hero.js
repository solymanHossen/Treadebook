import React from 'react';
import img from "../../Asset/tourist-with-thumb-up__1_-removebg 1.png"
import './Hero.css'
import { IoIosArrowDropdown } from "react-icons/io"

const Hero = () => {
  return (
    <div className="color-all">
      <div className="container" style={{ paddingBottom: "53px" }}>
        <div className="main-hero">

          <div className="content-hero">
            <p className='logo-content logo-content-p'>Get started your exciting <span style={{ color: "#FA7436" }}> journey </span>
              with us.
            </p>
            <p className='hero-content-p'>A Team of experienced tourism professionals will provide
              you with the best advice and tips for your desire place. </p>
            <button className='btn-discover'>Discover Now</button>
          </div>

          <div className="hero-img">
            <img className='hero-img-i' src={img} alt="pic" />
          </div>


        </div>

        <div className="location-date">

          <div className="location hero-font">
            Location<span className='dropdown-color'><IoIosArrowDropdown /></span>
            <p className='popinText'>Where are you going</p>
          </div>

          <div className="date hero-font ">
            Date<span className='dropdown-color'><IoIosArrowDropdown /></span>
            <p className='popinText'> When you will go</p>
          </div>

          <div className="Guest hero-font">
            Guest<span className='dropdown-color'><IoIosArrowDropdown /></span>
            <p className='popinText'>Number of guest</p>
          </div>
          <button className='btn-explore'>Explore Now</button>
        </div>
      </div>
    </div>


  );
};

export default Hero;