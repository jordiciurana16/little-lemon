import React from "react";
import './MenuPage.css';
import DishFilter from "./DishFilter";
import DishMenu from "./DishMenu";

function MenuPage(){
    return (
        <>
            <DishFilter />
            <DishMenu />
        </>
    )
}

export default MenuPage;