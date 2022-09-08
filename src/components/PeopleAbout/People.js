import React from 'react';
import img1 from "../../Asset/Image (3).png"

import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import "./People.css"

const People = () => {
  return (
    <div className="people-bgc">
      <div className="container people-container">
        <div >
          <p className='pepole-about logo-content'>What people say
            <span className='people-about-us'> about Us</span></p>
          <p className='p-people'>Our Clients send us bunch of smilies with our services and we love them.</p>
          
        </div>
    

        <div className='pepole-content-person'>
          <div className='person-container' >
          <div className="person-img"><img src={img1} alt="img" className='single-img' /></div>
            <p>
            “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
            </p>
            <h4>Mike taylor</h4>
            <p>Lahore, Pakistan</p>
          </div>
          
          <div className='pepole-person-mike-taylor'>
            <div className="taylor-flex">
            <h4>Mike taylor</h4>
            <p>Lahore, Pakistan</p>
            </div>
          </div>
        </div>

      </div>
      <div className="pagination4">
            <span><FiArrowLeft className='page-icon4' /></span><span className='page-icon4'><FiArrowRight className='main-icon page-icon4' /></span>
          </div>
    </div>
  );
};

export default People;