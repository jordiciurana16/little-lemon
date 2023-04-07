import React, { useState, useEffect } from "react";
import DishCard from "../DishCard/DishCard.jsx";
import dishesData from "../../main/DishCard/DishData.json";

function SpecialsSection() {
  const [specialDishes, setSpecialDishes] = useState([]);

  useEffect(() => {
    const allDishes = dishesData.dishes.slice(); // create a copy of the dishes array
    const selectedDishes = [];
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * allDishes.length); // choose a random index
      const selectedDish = allDishes[randomIndex]; // get the dish at the random index
      selectedDishes.push(selectedDish); // add the selected dish to the selectedDishes array
      allDishes.splice(randomIndex, 1); // remove the selected dish from the allDishes array
    }
    setSpecialDishes(selectedDishes);
  }, []);

  return (
    <section className="specials-section content-padding">
      <div className="specials-header pt-5 d-flex justify-content-between">
        <h1 className="title my-auto mt-4">This week specials!</h1>
        <button className="button-primary my-auto mt-4">Online Menu</button>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <div className="row">
          {specialDishes.map((dish, index) => (
            <div key={index} className="col-4 mb-5">
              <DishCard
                name={dish.name}
                price={dish.price}
                description={dish.description}
                image={dish.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SpecialsSection;
