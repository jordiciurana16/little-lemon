import React from "react";

function OffersCard({ img, name, description, price }) {
  return (
    <div className="card offers-card">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">{price}</p>
      </div>
    </div>
  );
}

export default OffersCard;
