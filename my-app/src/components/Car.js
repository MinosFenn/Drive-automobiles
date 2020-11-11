import React from 'react';
import {Link} from 'react-router-dom';
import defaultImg from "../images/test1.jpg";
 
export default function Car({ car }) {
    console.log(car)

    const{nom,slug,kilométrage,images,prix} = car;

    return (<article className="room">
    <div className="img-container">
      <img src={images[0] || defaultImg} alt="single car" />
      <div className="name-top">
      <h6>{nom}</h6>
      </div>
      <div className="km-bottom">

      <h6>{kilométrage} KM</h6>
      </div>

      <div className="price-bottom">
      <h6>{prix} €</h6>
</div>
      
      </div> 
  </article>)
    
}
