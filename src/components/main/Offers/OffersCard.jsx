import React from "react";
import './Offers.css';

function OffersCard({ img, name, description, price }) {
  const cardStyle = {
    backgroundImage: `url(${img})`
  };

  return (
    <div className="card offers-card" style={cardStyle}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="offers-description paragraph">{description}</p>
        <p className="card-text price">{price}</p>
      </div>
    </div>
  );
}

export default OffersCard;
