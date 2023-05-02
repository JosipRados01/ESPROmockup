import React from 'react';
import downArrow from "../../assets/images/arrow-right-short.svg";
import pourImage from "../../assets/images/2132C2_6.png";


function Hero() {
    console.log(pourImage)
  return (
    <div id='hero'>
      <div className='background'><img src={""} ></img></div>
      <div className='flex-center-column' >
        <h1>

        </h1>
        <p>

        </p>
        <button>

        </button>
      </div>
      <div>
        <span>EXPLORE</span>
        <img src={downArrow} ></img>
      </div>
    </div>
  );
}

export default Hero;
