import React from 'react';
import './Subscribe.css'
import {BsSearch} from "react-icons/bs"
const Subscribe = () => {
  return (
  <div className="container   subscribe-main">
   <p>Subscribe and get exclusive deals & offer</p>

   <div class="main">
  
 
  <div class="form-group has-search">
    <span class="fa fa-search form-control-feedback"><BsSearch/></span>
    <input type="text" class="form-control" placeholder="Search"/>
    <button>subscribe</button>
  </div>
</div>
  
  </div>
  );
};

export default Subscribe;