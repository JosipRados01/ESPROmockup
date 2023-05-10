import React from 'react';
import sponsorsArray from "./sponsors.json"

function Sponsors() {
    const populateScroller =  ()=> {
    let elements = []
    sponsorsArray.forEach((sponsor) => 
        elements.push(
        <figure>
            <img src={sponsor}></img>
        </figure>)
    )
    sponsorsArray.forEach((sponsor) => 
    elements.push(
    <figure>
        <img src={sponsor}></img>
    </figure>) 
    )
    return elements

    }
  return (

    <div id='sponsors'>
        <h3>IN THE PRESS</h3>
        <p>
            “The result is a richly flavored, super aromatic cup of coffee without the usual silt in the bottom. 
            The press isn’t just for coffee, either—there’s also a tea filter available that isolates tea leaves to prevent oversteeping.”
        </p>
        <div id='infinite-scroll'>
            <div className='photobanner'>
                {populateScroller()}
            </div>
        </div>
    </div>
  );
}

export default Sponsors;
