import React from 'react';
import {Link} from 'react-router-dom';
import defaultImg from "../images/room-1.jpeg";
 
export default function Car({ car }) {
    console.log(car)

    const{name,slug,images,price} = car;

    return (<article className="room">
    <div className="img-container">
      <img src={images[0] || defaultImg} alt="single room" />
      </div> 
  </article>)
    
}
