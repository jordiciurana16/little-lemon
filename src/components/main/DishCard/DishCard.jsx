import React from "react";
import "../DishCard/DishCard.css";
import bike from "../../../assets/img/bike.png";

function DishCard(props) {
  return (
    <div className="dish card mt-4 rounded-0 rounded-top">
      <img className="card-img-top" src={props.image} alt="Card image cap" />
      <div className="dish card-body d-flex flex-column pt-4 ps-4 pe-4 pb-3">
        <div className="d-flex justify-content-between mb-2">
          <h4 className="title-card  my-auto">{props.name}</h4>
          <p className="card-text price  my-auto">${props.price}</p>
        </div>
        <div className="row">
          <p className="card-text pt-3">{props.description}</p>
        </div>
        <div className="d-flex mx-auto my-auto mb-2">
            <p className="card-text section-categories my-auto pe-2">Order a delivery</p>
            <img className="img-bike my-auto" src={bike} alt="Order a delivery" />
        </div>
      </div>
    </div>
  );
}

export default DishCard;