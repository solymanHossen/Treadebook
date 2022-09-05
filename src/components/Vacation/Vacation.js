import React from 'react';
import './Vacation.css'
import img1 from "../../Asset/tourist-with-thumb-up__1_-removebg 1.png"
import { GiPoolTriangle } from "react-icons/gi"
import { FiStar } from "react-icons/fi"
import {BiFirstPage,BiLastPage } from "react-icons/bi"

const Vacation = () => {
  return (
    <div className='container'>
      <div className="discounts-content">

        <p>Best vacation plan</p>
        <p>Plan your perfect vacation with our travel agency. Choose among hundreds of all-inclusive offers! .
        </p>
      </div>
      <div className="pagination2">
      <span className='page-icon'><BiFirstPage /></span><span className='page-icon'><BiLastPage  className='main-icon'/></span>
      </div>
      <div className="card-flex2">
        <div className="card">
          <img src={img1} alt="Avatar" style={{ width: "100%" }} />
          <div className="container">

            <div className="city">
              <p>Madrid</p><span>4.6<FiStar /></span>
            </div>
            <div className="country">

              <div className="location">
                <GiPoolTriangle /><span>Spain</span>
              </div>

              <div className="price">
                <span>$150</span><span className='net-price'>$850</span>
              </div>
            </div>

          </div>
        </div>
        <div className="card">
          <img src={img1} alt="Avatar" style={{ width: "100%" }} />
          <div className="container">

            <div className="city">
              <p>Madrid</p><span>4.6<FiStar /></span>
            </div>
            <div className="country">

              <div className="location">
                <GiPoolTriangle /><span>Spain</span>
              </div>

              <div className="price">
                <span>$150</span><span className='net-price'>$850</span>
              </div>
            </div>

          </div>
        </div>
        <div className="card">
          <img src={img1} alt="Avatar" style={{ width: "100%" }} />
          <div className="container">

            <div className="city">
              <p>Madrid</p><span>4.6<FiStar /></span>
            </div>
            <div className="country">

              <div className="location">
                <GiPoolTriangle /><span>Spain</span>
              </div>

              <div className="price">
                <span>$150</span><span className='net-price'>$850</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Vacation;