import React from 'react';
import img1 from "../../Asset/Image (1).png"
import './LeatestBlog.css'
import { FiArrowRight, FiArrowLeft} from "react-icons/fi"

const LeatestBlog = () => {
  return (
    <div className="blog-bgc">
      <div className="container">

        <div className="blog-content ">

          <p className='logo-content'>Get update with <span style={{color:" #FA7436"}}> latest blog </span>
          </p>

        </div>
        
        <div className="blog-card-flex">
        <div className="card-flex5">
          <div className="card5">
            <img src={img1} alt="Avatar" style={{ width: "100%" }} />
            <div className="blog-content-p">
              <p className='blog-content-travelling'>The Amazing Difference a Year of Travelling .</p>
              <p className='blog-content-date'>May/27/2020</p>
            </div>
          </div>
        </div>
        <div className="card-flex5">
          <div className="card5">
            <img src={img1} alt="Avatar" style={{ width: "100%" }} />
            <div className="blog-content-p">
              <p className='blog-content-travelling'>The Amazing Difference a Year of Travelling .</p>
              <p className='blog-content-date'>May/27/2020</p>
            </div>
          </div>
        </div>
        <div className="card-flex5">
          <div className="card5">
            <img src={img1} alt="Avatar" style={{ width: "100%" }} />
            <div className="blog-content-p">
              <p className='blog-content-travelling'>The Amazing Difference a Year of Travelling .</p>
              <p className='blog-content-date'>May/27/2020</p>
            </div>
          </div>
        </div>
        <div className="card-flex5">
          <div className="card5">
            <img src={img1} alt="Avatar" style={{ width: "100%" }} />
            <div className="blog-content-p">
              <p className='blog-content-travelling'>The Amazing Difference a Year of Travelling .</p>
              <p className='blog-content-date'>May/27/2020</p>
            </div>
          </div>
        </div>
     

        

      </div>
      </div>
      <div className="pagination5">
          <span className='page-icon'><FiArrowLeft /></span><span className='page-icon'>< FiArrowRight className='main-icon' /></span>
        </div>
    </div>
  );
};

export default LeatestBlog;