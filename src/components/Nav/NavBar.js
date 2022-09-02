import React from 'react';
import logo from '../../Asset/Vector.png'
import '../NavBar.css'

const NavBar = () => {
  return (
   <div className="nav-container">

    <div className="logo">
    <p className='logo-content'>Trabook</p>
    <img src={logo} alt="logo"  className='logo-pic'/>
    </div>

 
      <ul className='main-nav'>
        <li>Home</li>
        <li>About</li>
        <li>Destination</li>
        <li>Tour</li>
        <li>Blog</li>
      </ul>


    <div className="login-singup">
      <p className='login-content'>login</p>
      <button className='singUp-btn'>sing up</button>
    </div>

   </div>
  );
};

export default NavBar;