import React from 'react';
import './Vacation.css'
import img1 from "../../Asset/Image (1).png"

import { FiStar } from "react-icons/fi"
import { FaLocationArrow } from "react-icons/fa"
import { FiArrowRight, FiArrowLeft } from "react-icons/fi"

const Vacation = () => {
  return (
    <div className="vacation-bgc-color">
      <div className='container container-bgc-dis'>
        <div className="discounts-content">

          <p className='logo-content logo-content-best-plan'>Best <span style={{ color: "#FA7436" }}> vacation plan </span></p>
          <p className="p-logo">Plan your perfect vacation with our travel agency. Choose among hundreds of all-inclusive offers! .
          </p>
        </div>

        <div className="pagination2">
          <span className='page-icon'>< FiArrowLeft  /></span><span className='page-icon'><FiArrowRight className='main-icon' /></span>
        </div>
        <div className="card-flex2">


          <div className="card2">
            <img src={img1} alt="Avatar" style={{ width: "100%" }} />
            <div className="container-vaction">

              <div className="city">
                <p>Rome, Italty</p><span className='city-price'>$542k</span>
              </div>
              <div className="country">

                <div className="location">
                  <FaLocationArrow className='vacation-location' /><span>10 Days Trip</span>
                </div>

                <div className="price">
                  <FiStar className='vacation-star' /><span >50</span>
                </div>
              </div>

            </div>
          </div>
          <div className="card2">
            <img src={img1} alt="Avatar" style={{ width: "100%" }} />
            <div className="container-vaction">

              <div className="city">
                <p>Rome, Italty</p><span className='city-price'>$542k</span>
              </div>
              <div className="country">

                <div className="location">
                  <FaLocationArrow className='vacation-location' /><span>10 Days Trip</span>
                </div>

                <div className="price">
                  <FiStar className='vacation-star' /><span >50</span>
                </div>
              </div>

            </div>
          </div>
          <div className="card2">
            <img src={img1} alt="Avatar" style={{ width: "100%" }} />
            <div className="container-vaction">

              <div className="city">
                <p>Rome, Italty</p><span className='city-price'>$542k</span>
              </div>
              <div className="country">

                <div className="location">
                  <FaLocationArrow className='vacation-location' /><span>10 Days Trip</span>
                </div>

                <div className="price">
                  <FiStar className='vacation-star' /><span >50</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Vacation;