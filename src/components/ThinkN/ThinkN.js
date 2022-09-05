import React from 'react';

import img2 from '../../Asset/Vector (2).png'
import img3 from '../../Asset/Vector.png'
import './ThinkN.css'

const ThinkN = () => {
  return (
  
      <div className="container main-bgc">
      <div className="allContent  bgc">


     <div className="contentT">
      <p>Things you need <span> to do</span></p>
      <p>We ensure that you’ll embark on a perfectly planned, safe vacation at a price you can afford. </p>
     </div>
     
   <div className="container singupSignIn">
     <div className="singUp">
      <img src={img3  } alt="img" />
      <p>Sign Up</p>
      <p>Completes all the work associated with planning and processing</p>
     </div>
     <div className="singUp">
     <img src={img2} alt="img" />
      <p>Worth of Money</p>
      <p>After successful access then book from exclusive deals & pricing</p>
     </div>
     <div className="singUp">
     <img src={img3} alt="img" />
      <p>Exciting Travel
</p>
      <p>Start and explore a wide range of exciting travel experience.</p>
     </div>
     </div>

      </div>
      </div>
  );
};

export default ThinkN;