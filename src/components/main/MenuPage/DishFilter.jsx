import React, { useState } from "react";

function DishFilter() {
  const [maxMinText, setMaxMinText] = useState("max");

  function toggleMaxMinText() {
    setMaxMinText(maxMinText === "max" ? "min" : "max");
  }

  return (
    <section className="dish-filter pt-4 pb-4 d-none d-md-block">
      {/* The 'd-none d-md-block' class will hide the section on small devices */}
      <div className="d-flex content-padding justify-content-between">
        <form className="row align-items-center">
          <div className="col-auto">
            <select className="form-select" id="meal-type">
              <option value="">Meal</option>
              <option value="appetizer">Appetizer</option>
              <option value="entree">Entree</option>
              <option value="dessert">Dessert</option>
            </select>
          </div>
          <div className="col-auto">
            <select className="form-select" id="food-type">
              <option value="">Food</option>
              <option value="fish">Fish</option>
              <option value="vegetables">Vegetables</option>
              <option value="rice">Rice</option>
              <option value="meat">Meat</option>
              <option value="pasta">Pasta</option>
            </select>
          </div>
          <div className="col-auto">
            <div className="input-group">
              <span
                className="input-group-text p-2"
                onClick={toggleMaxMinText}
                style={{ cursor: "pointer" }}
              >
                Price $ {maxMinText}
              </span>
              <input
                type="number"
                className="form-control flex-grow-1"
                aria-label="Price"
                min="0"
                max="50"
                step="1"
              />
            </div>
          </div>
        </form>
        <div className="col-auto">
          <button className="button-primary" type="submit">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}

export default DishFilter;
