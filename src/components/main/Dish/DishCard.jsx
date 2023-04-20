import React, { useState } from "react";
import "./Dish.css";
import bag from "../../../assets/img/bag.svg";
import bagFill from "../../../assets/img/bag-fill.svg";

function DishCard(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="card">
      <div className="card-body p-0 m-0 rounded">
        <div className="row m-0 p-0">
          <div className="col-3 m-0 p-0">
            <img className="card-img-left " src={props.image} alt={props.name} />
          </div>
          <div className="col-9 m-0 p-0 d-flex justify-content-between ">
            <h5 className="my-auto ps-2 paragraph">{props.name}</h5>
            <div className="d-flex flex-column">
              <div className="d-flex flex-column align-items-end pe-2 my-auto"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <p className="card-text price m-0 pb-1">${props.price}</p>
                <img
                  className="bag-image m-0 pb-2"
                  src={isHovered ? bagFill : bag}
                  alt="Order a delivery"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DishCard;
