import React from "react";
import DishCard from "../Dish/DishCard";
import dishesData from "../Dish/DishData.json";

function MenuSection() {
  const cardsPerRow = 3;

  // Filter the dishes for each section (appetizers, entrees, desserts)
  const appetizers = dishesData.dishes.filter(dish => dish.meal === "appetizer");
  const entrees = dishesData.dishes.filter(dish => dish.meal === "entree");
  const desserts = dishesData.dishes.filter(dish => dish.meal === "dessert");

  return (
    <section className="menu-section content-padding mb-5">
      <div className="pt-4">
        <h1 className="title">Menu</h1>
      </div>
      <div className="appetizers">
        <h5 className="price mt-3 p-0">Appetizers</h5>
        <hr className="price mt-2 mb-2"/>
        <div className="row">
        {dishesData.dishes.map((dish, index) => (
          <div key={index} className="col-lg-4 col-12 mb-2"> {/* Adjust column widths based on screen size */}
            <DishCard
              name={dish.name}
              price={dish.price}
              image={dish.image}
            />
          </div>
        ))}
      </div>
      </div>
      <div className="entrees mt-3">
        <h5 className="price m-0 p-0">Entrees</h5>
        <hr className="price mt-2 mb-2"/>
        <div className="row">
        {dishesData.dishes.map((dish, index) => (
          <div key={index} className="col-lg-4 col-12 mb-2"> {/* Adjust column widths based on screen size */}
            <DishCard
              name={dish.name}
              price={dish.price}
              image={dish.image}
            />
          </div>
        ))}
      </div>
      </div>
      <div className="desserts mt-3 mb-2">
        <h5 className="price m-0 p-0">Desserts</h5>
        <hr className="price mt-2 mb-2"/>
        <div className="row">
        {dishesData.dishes.map((dish, index) => (
          <div key={index} className="col-lg-4 col-12 mb-2"> {/* Adjust column widths based on screen size */}
            <DishCard
              name={dish.name}
              price={dish.price}
              image={dish.image}
            />
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

export default MenuSection;