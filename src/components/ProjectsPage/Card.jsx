import React from 'react';
import './Card.css'




function Card({img, path}) {


  return (
    <div className='card-body'>
      <img src={img} alt=""/>
      <div className="card-overlay">
        <a href={path} target="_blank" rel="noopener noreferrer">View Source</a>
      </div>
    </div>
  )

}

export default Card;
