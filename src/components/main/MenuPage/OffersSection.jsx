import React from "react";
import OffersCard from "../Offers/OffersCard";
import offersData from "../Offers/OffersData.json";

function OffersSection() {
  return (
    <section className="offers-section content-padding text-center pb-5">
      <div className="offers-header">
        <h1 className="title yellow pt-5 pb-4">Offers</h1>
      </div>
      <div className="row mb-4">
            {offersData.map((offer) => (
            <div className="col-4" key={offer.id}>
                <OffersCard
                img={offer.img}
                name={offer.name}
                description={offer.description}
                price={offer.price}
                />
            </div>
            ))}
      </div>
    </section>
  );
}

export default OffersSection;
