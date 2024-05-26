import React from "react";
import "./card.css";

function Card({colorLabel, label, picture}) {
  return (
    <div className="card">
      <div className={`label ${colorLabel}`}>
        <p>{label}</p>
      </div>
      <div className={`picture ${picture}`}></div>
      <p className={`name name_${colorLabel}`}>Adam Sandler</p>
      <p className="card_title">Solutions for people like you like people</p>
      <p className="description">
        How can we help your technology  and services business develop a  revenue
        engine based
      </p>
      <button className={` ${colorLabel}`}>Call to action</button>
    </div>
  );
}

export default Card;
