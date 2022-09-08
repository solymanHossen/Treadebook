import React from 'react';
import './Subscribe.css'
// import {MdMessage} from 'react-icons/md'
const Subscribe = () => {
  return (
    <div className="subcrib-bgc">
      <div className="container   subscribe-main">


        <div className="deals-subcribe">

          <p className='logo-content heading-subscribe'>Subscribe and get exclusive deals & offer</p>

          <div className="input-group">
            <div className="form-outline">
              <input type="search" id="form1" className="form-control" placeholder='Enter your Email' />
              <button className='btn-subscribe'>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;