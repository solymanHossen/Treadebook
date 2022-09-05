// import React from 'react';
// import logo from '../../Asset/Vector.png'
// import '../NavBar.css'
// import { GiHamburgerMenu } from "react-icons/gi";
// import { useState } from 'react';

// const NavBar = () => {
//   const [showMediaIcons, setShowMediaIcons] = useState(false);
//   return (
//    <div className="nav-container">

//     <div className="logo">
//     <p className='logo-content'>Trabook</p>
//     <img src={logo} alt="logo"  className='logo-pic'/>
//     </div>

//       <ul className='main-nav'>
//         <li>Home</li>
//         <li>About</li>
//         <li>Destination</li>
//         <li>Tour</li>
//         <li>Blog</li>
//       </ul>
   
//       <div
//           className={
//             showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
//           }>
//             </div>
     

//     <div className="login-singup">
//       <p className='login-content'>login</p>
//       <button className='singUp-btn'>sing up</button>
//     </div>
//     <div className="hamburger-menu">
//             <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
//               <GiHamburgerMenu />
//             </a>
//           </div>
          
//    </div>
   
//   );
// };

// export default NavBar;


import React, { useState } from "react";
import '../NavBar.css'
import logo from '../../Asset/Vector.png'

import { GiHamburgerMenu } from "react-icons/gi";


import './NavBar'
import { Link } from "react-router-dom";

const NavBar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">

        {/* 1st logo part  */}
        <div className="logo">
         <p className="logo-content">Trabook</p>
         <img src={logo} alt="logo"  className='logo-pic'/>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
         <a href="">Home</a>
            </li>
            <li>
          <a href="">About</a>
            </li>
            <li>
            <a href="">Destination</a>
            </li>
            <li>
         <a href="">  Tour</a>
            </li>
            <li>
          <a href="">Blog</a>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="singup-login">
          <ul className="singup-login-desktop">
            <li className="log-in">
              log In
            </li>
            <li><button className="singU">Sing Up</button></li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

 
    </>
  );
};

export default NavBar;