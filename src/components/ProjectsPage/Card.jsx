import React from 'react';
import './Card.css'


function Card({img}) {
  return (
    <div className="card-body">
      <img src={img} alt="" />
      <p>Some projects info</p>
    </div>
  )

}

export default Card;
