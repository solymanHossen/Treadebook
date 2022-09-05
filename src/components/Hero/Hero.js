import React from 'react';
import img from "../../Asset/tourist-with-thumb-up__1_-removebg 1.png"
import './Hero.css'
import {IoIosArrowDropdown} from "react-icons/io"

const Hero = () => {
  return (
    <div className="container">
    <div className=" main-hero">

      <div className="content-hero">
        <p className='logo-content'>Get started your exciting <span style={{color:"#FA7436"}}> journey </span>
          with us.
        </p>
        <p style={{marginTop: "32px"}}>A Team of experienced tourism professionals will provide 
          you with the best advice and tips for your desire place. </p>
        <button className='btn-discover'>Discover Now</button>
      </div>
      
      <div className="hero-img">
      <img src={img} alt="pic" />
      </div>

      
      </div>
    
      <div className="location-date">
        
        <div className="date">
        Location<span><IoIosArrowDropdown/></span>
        <p className='popinText'>Where are you going</p>
        </div>

        <div className="date">
        Date<span><IoIosArrowDropdown/></span>
       <p className='popinText'> When you will go</p>
        </div>

        <div className="Guest">
        Guest<span><IoIosArrowDropdown/></span>
        <p className='popinText'>Number of guest</p>
        </div>
        <button className='btn-explore'>Explore Now</button>
      </div>  
      </div>


  );
};

export default Hero;