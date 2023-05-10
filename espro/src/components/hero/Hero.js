import React from 'react';
import downArrow from "../../assets/images/arrow-right-short.svg";
import pourImage from "../../assets/images/2132C2_6.png";


function Hero() {
  return (
    <div id='hero'>
      <div className='background'><img src={pourImage} ></img></div>
      <div className='flex-center-column heroText' >
        <h1>
          BREW ANYWHERE. BE ANYWHERE.
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.        </p>
        <button>
          POUR ON THE GO
        </button>
      </div>
      <div className='exploreTag'>
        <span>EXPLORE</span>
        <img src={downArrow} ></img>
      </div>
    </div>
  );
}

export default Hero;
