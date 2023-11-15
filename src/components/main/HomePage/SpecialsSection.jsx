import React, { useState, useEffect } from "react";
import DishSpecial from "../Dish/DishSpecial.jsx";
import dishesData from "../Dish/DishData.json";

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
    <section className="specials-section content-padding mb-5">
      <div className="specials-header pt-5 mt-3 d-flex justify-content-between">
        <h1 className="title my-auto">This week specials!</h1>
        <button className="button-primary my-auto">Online Menu</button>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <div className="row">
          {specialDishes.map((dish, index) => (
            <div key={index} className="col-12 col-md-4">
              <DishSpecial
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
