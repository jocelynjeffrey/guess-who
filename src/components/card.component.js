import React from 'react';

function toggleActiveClass(e) {
  console.log(e.className);
  e.classList.toggle('active');
}

export const Card = (props) =>
      <button
        className="active card"
        onClick={(e) => toggleActiveClass(e.target)}
      >
        <img src={props.img} alt={props.alt} key={props.alt} />
        <span className="name">{props.name}</span>
      </button>

export default Card;
