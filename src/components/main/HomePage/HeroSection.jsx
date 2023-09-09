import React from "react";
import food from "../../../assets/img/restaurantfood.jpg"

const handleReserveTable = () => {
  window.location.href ="/little-lemon/reservation";
};


function HeroSection() {
  return (
    <section className="hero-section position-relative content-padding" >
          <div className="row align-items-center">
              <div className="col-md-6">
                  <h1 className="title yellow d-inline-block text-nowrap pt-4">Little Lemon</h1>
                  <h2 className="subtitle highlight">Chicago</h2>
                  <p className="paragraph highlight">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                  <button className="button-primary mt-3 mb-4" onClick={handleReserveTable}>Reserve a table</button>
                  <img src={food} alt="example" className="position-absolute end-0 top-0 mt-4 rounded" />
              </div>
          </div>
    </section>
  );
}

export default HeroSection;
