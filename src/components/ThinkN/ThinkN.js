import React from 'react';

import img2 from '../../Asset/Vector (2).png'
import img3 from '../../Asset/Vector.png'
import './ThinkN.css'

const ThinkN = () => {
  return (
      <div className="thinkbgc-color">
      <div className="container main-bgc">
      <div className="allContent  bgc">


     <div className="contentT">
      <p className='logo-content'>Things you need <span style={{color:"#FA7436"}}> to do</span></p>
      <p className=' logo-content-p-t'>We ensure that you’ll embark on a perfectly planned, safe vacation at a price you can afford. </p>
     </div>
     
   <div className="container singupSignIn">
     <div className="singUp">
      <div><img src={img3 } alt="img" className='height-width' /> </div>
      
      <p className='font-singup-singin'>Sign Up</p>
      <p className='font-singup-singin-p'>Completes all the work associated with planning and processing</p>
     </div>
     <div className="singUp">
     <div><img src={img2} alt="img"  className='height-width'/></div>
      <p className='font-singup-singin'>Worth of Money</p>
      <p className='font-singup-singin-p'>After successful access then book from exclusive deals & pricing</p>
     </div>
     <div className="singUp">
     <div><img src={img3} alt="img" className='height-width' /></div>
      <p className='font-singup-singin'>Exciting Travel
</p>
      <p className='font-singup-singin-p'>Start and explore a wide range of exciting travel experience.</p>
     </div>
     </div>

      </div>
      </div>
      </div>
  );
};

export default ThinkN;