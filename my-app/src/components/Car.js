import React from 'react';
import {Link} from 'react-router-dom';
import defaultImg from "../images/test1.jpg";
 import PropTypes from "prop-types"; 

export default function Car({ car }) {
    // console.log(car)

    const{nom,slug,images,prix,kilométrage} = car;

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
      <Link to={`/cars/${slug}`} className="btn-primary room-link">
        Détails
      </Link>
      </div> 
      {/* <p className="room-info"></p> */}
  </article>)
    
}
//verify informations validity
Car.propTypes = {
  car:PropTypes.shape({
    nom:PropTypes.string.isRequired,
    slug:PropTypes.string.isRequired,
    images:PropTypes.arrayOf(PropTypes.string).isRequired,
    prix:PropTypes.number.isRequired,
    kilométrage:PropTypes.number.isRequired,

  })
}
