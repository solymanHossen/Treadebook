import React from 'react';
import img1 from "../../Asset/Image (1).png"
import { FiStar } from "react-icons/fi"
import { ImLocation2 } from "react-icons/im"
import { BiFirstPage, BiLastPage } from "react-icons/bi"
import './LeatestBlog.css'

const LeatestBlog = () => {
  return (
    <div className="container " style={{ background: " #FEFCFB", padding: "120px,120px" }}>

      <div className="blog-content">

        <p>Get update with latest blog
        </p>

      </div>
      <div className="card-flex3">
        <div className="card">
          <img src={img1} alt="Avatar" style={{ width: "100%" }} />
          <div className="container">

            <div className="city">
              <p>Madrid</p><span>4.6<FiStar /></span>
            </div>
            <div className="country">

              <div className="location">
                <ImLocation2 /><span>Spain</span>
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
                <ImLocation2 /><span>Spain</span>
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
                <ImLocation2 /><span>Spain</span>
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
                <ImLocation2 /><span>Spain</span>
              </div>

              <div className="price">
                <span>$150</span><span className='net-price'>$850</span>
              </div>
            </div>
          </div>
        </div>




      </div>
      <div className="pagination3">
        <span className='page-icon'><BiFirstPage /></span><span className='page-icon'><BiLastPage className='main-icon' /></span>
      </div>

    </div>
  );
};

export default LeatestBlog;