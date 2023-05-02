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
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
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
