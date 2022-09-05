import React from 'react';
import { BiFirstPage,BiLastPage } from 'react-icons/bi';
import "./People.css"

const People = () => {
  return (
    <div className="container people-container">
   <div className="pepole-about">
    <p>What people say
about Us.</p>
<p>Our Clients send us bunch of smilies with our services and we love them.</p>
<div className="pagination3">
      <span className='page-icon'><BiFirstPage /></span><span className='page-icon'><BiLastPage  className='main-icon'/></span>
      </div>
   </div>
   <div className="person-content">
    <div className="person-img">img</div>
  <p> “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
  <p>Mike taylor</p>
  <p>Lahore, Pakistan</p>
   </div>
   </div>
  );
};

export default People;