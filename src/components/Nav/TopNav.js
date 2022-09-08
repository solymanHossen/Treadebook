import React from 'react';
import './TopNav.css'

const TopNav = () => {
  return (
    <div className="container">
   <div className="mainNav">
    <div className="logo">
      <p>Treadebook</p>
      <img src="" alt="img" />

    </div>

   
      <ul>
        <li>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Destination</a>
          <a href="">Tour</a>
          <a href="">Blog</a>
        </li>
      </ul>
  
    <div className="singUpSingin">
      <p>login</p>
      <button>SingUp</button>
    </div>


   </div>
   </div>
  );
};

export default TopNav;