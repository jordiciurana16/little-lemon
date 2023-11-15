import React from "react";
import mabottom from "../../../assets/img/marioadrianbottom.jpg"
import matop from "../../../assets/img/marioadriantop.jpg"
import '../HomePage/HomePage.css'

function AboutUsSection() {
  return (
    <section className="content-padding">
      <div className="row pb-5">
        <div className="col-md-6 pt-4 mb-5">
            <h1 className="title my-auto pt-4">About us</h1>
            <h2 className="subtitle">Mario & Adrian</h2>
            <p className="paragraph about">We're Mario and Adrian, two passionate chefs who share a love for cooking Italian, Turkish, and Greek
            food.</p>

            <p className="paragraph about">Our menu features a wide range of delicious dishes that showcase the unique flavors and traditions of
             Italian, Turkish, and Greek cuisine.
            </p>

        </div>
        <div className="col-md-6 mb-5">
          <div className="image-container d-none d-md-block">
            <img src={matop} alt="Placeholder 2" className="bottom-image rounded" />
            <img src={mabottom} alt="Placeholder 1" className="top-image rounded" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
