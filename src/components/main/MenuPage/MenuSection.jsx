import React from "react";
import DishCard from "../Dish/DishCard";
import dishesData from "../Dish/DishData.json";

function MenuSection() {
  const cardsPerRow = 3;

  // Filter the dishes for each section (appetizers, entrees, desserts)
  const appetizers = dishesData.dishes.filter(dish => dish.meal === "appetizer");
  const entrees = dishesData.dishes.filter(dish => dish.meal === "entree");
  const desserts = dishesData.dishes.filter(dish => dish.meal === "dessert");

  // Create an array of arrays, where each sub-array contains up to three dish objects.
  const rows = dishesData.dishes.reduce((acc, dish, index) => {
    const rowIdx = Math.floor(index / cardsPerRow);
    if (!acc[rowIdx]) {
      acc[rowIdx] = [];
    }
    acc[rowIdx].push(dish);
    return acc;
  }, []);

  return (
    <section className="menu-section content-padding">
      <div className="pt-4">
        <h1 className="title">Menu</h1>
      </div>
      <div className="appetizers">
        <h5 className="price m-0 p-0">Appetizers</h5>
        <hr className="price mt-2 mb-2"/>
        <div className="row">
          {appetizers.map((dish, index) => (
            <div key={index} className={`col-${12 / cardsPerRow} mb-2`}>
              <DishCard
                name={dish.name}
                price={dish.price}
                image={dish.image}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="entrees mt-2">
        <h5 className="price m-0 p-0">Entrees</h5>
        <hr className="price mt-2 mb-2"/>
        <div className="row">
          {entrees.map((dish, index) => (
            <div key={index} className={`col-${12 / cardsPerRow} mb-2`}>
              <DishCard
                name={dish.name}
                price={dish.price}
                image={dish.image}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="desserts mt-2">
        <h5 className="price m-0 p-0">Desserts</h5>
        <hr className="price mt-2 mb-2"/>
        <div className="row">
          {desserts.map((dish, index) => (
            <div key={index} className={`col-${12 / cardsPerRow} mb-2`}>
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
