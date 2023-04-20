import React from "react";
import DishCard from "../Dish/DishCard";
import dishesData from "../Dish/DishData.json";

function MenuSection() {
  const cardsPerRow = 3;

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
      <div className="row">
        {rows.map((row, index) => (
          <React.Fragment key={index}>
            {row.map((dish, dishIndex) => (
              <div key={dish.name} className={`col-${12 / cardsPerRow} mb-2`}>
                <DishCard
                  name={dish.name}
                  price={dish.price}
                  image={dish.image}
                  secondColumn={dishIndex % cardsPerRow === 1}
                />
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default MenuSection;
