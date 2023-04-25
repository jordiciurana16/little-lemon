import React from "react";
import "./TestimonialCard.css";

function TestimonialCard(props) {
  const rating = props.rating;
  const stars = "🟊".repeat(rating);

  return (
    <div className="testimonial card rounded">
      <div className="testimonial card-body d-flex flex-column">
        <div className="star-rating">
          <span>{stars}</span>
        </div>
        <div className="row align-items-center">
          <div className="col-2">
            <img className="img-testimonial" src={props.image} alt="profile" />
          </div>
          <div className="col-10">
            <p className="card-text ml-3">{props.name}</p>
          </div>
        </div>
        <div className="row d-flex justify-content-between">
          <div className="col-12">
            <p className="testimonial card-text text-left pt-2">{props.review}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
