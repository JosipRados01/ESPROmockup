import React from 'react';
import searchIcon from "../../assets/images/search-line.svg"
import myAccountIcon from "../../assets/images/My Account icon.svg"
import shoppingBagIcon from "../../assets/images/Shopping bag icon.svg"
import ESPRO from "../../assets/images/ESPRO Logo.svg"

function Header() {
  return (
    <div id='header'>
      <div className='headerBanner'><p>Free shipping on all U.S. orders 49$+</p></div>
      <div className='flex-space-between' >
        <div className='container'>
            <div className='link'><a>SHOP</a></div>
            <div className='link'><a>OUR STORY</a></div>
        </div>
        <div className='container'>
            <figure>
                <img src={ESPRO} alt='ESPRO' ></img>
            </figure>
        </div>
        <div className='container'>
            <div className='link'><a>BREW GUIDES</a></div>
            <div className='link'><a>BLOG</a></div>
            <div className='link'><a><img src={searchIcon} alt='search'></img></a></div>
            <div className='link'><a><img src={myAccountIcon} alt='user'></img></a></div>
            <div className='link'><a><img src={shoppingBagIcon} alt='buy'></img></a></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
