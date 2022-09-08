import React from 'react';
import './Discounts.css'
import img1 from "../../Asset/Image (1).png"
import { FiArrowRight, FiArrowLeft, FiStar } from "react-icons/fi"
import { ImLocation2 } from "react-icons/im"


const Discounts = () => {
  return (
    <div className="discount-bgc">
    <div className="container " >

      <div className="discounts-content">

        <p className='logo-content logo-padding'>Exclusive <span style={{ color: "#FA7436", lineHeight: "24px" }}> deals & discounts</span></p>
        <p className='ineHeight-d' >Discover our fantastic early booking discounts & start planning your journey.
        </p>
      </div>
      <div className="card-flex">
        <div className="card">
          <img src={img1} alt="Avatar" style={{ width: "100%" }} />
          <div className="container-d">

            <div className="city">
              <p className='city-font-size'>Madrid</p><span className='rating-icon'>4.6<FiStar className='star-margin' /></span>
            </div>
            <div className="country">

              <div className="location">
                <ImLocation2 className='location-m' /><span >Spain</span>
              </div>

              <div className="price">
                <span>$150</span><span className='net-price'>$850</span>
              </div>
            </div>

          </div>
        </div>


        <div className="card">
          <div className='btn-relative-postion'>
            <img src={img1} alt="Avatar" style={{ width: "100%" }} />
            <button className='book-now-btn'>Book Now</button>
          </div>
          <div className="container-d">

            <div className="city">
              <p className='city-font-size'>Firenze</p><span className='rating-icon'>4.6<FiStar className='star-margin' /></span>
            </div>
            <div className="country">

              <div className="location">
                <ImLocation2 className='location-m' /><span >Italy</span>
              </div>

              <div className="price">
                <span >$150</span><span className='net-price'>$850</span>
              </div>
            </div>
          </div>
        </div>


        <div className="card">
          <img src={img1} alt="Avatar" style={{ width: "100%" }} />
          <div className="container-d">

            <div className="city">
              <p className='city-font-size'>Paris</p><span className='rating-icon'>4.6<FiStar className='star-margin' /></span>
            </div>
            <div className="country">

              <div className="location">
                <ImLocation2 className='location-m' /><span>France</span>
              </div>

              <div className="price">
                <span  >$550</span><span className='net-price'>$550</span>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={img1} alt="Avatar" style={{ width: "100%" }} />
          <div className="container-d ">

            <div className="city">
              <p className='city-font-size'>London</p><span className='rating-icon margin-price'>4.6<FiStar className='star-margin' /></span>
            </div>
            <div className="country">

              <div className="location">
                <ImLocation2 className='location-m' /><span>Uk</span>
              </div>

              <div className="price">
                <span >$150</span><span className='net-price'>$850</span>
              </div>
            </div>
          </div>
        </div>




      </div>
      <div className="pagination">
        <span className='page-icon'><FiArrowLeft /></span><span className='page-icon'><FiArrowRight className='main-icon' /></span>
      </div>

    </div>
    </div>
  );
};

export default Discounts;