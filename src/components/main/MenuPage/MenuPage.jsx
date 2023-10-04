import React from "react";
import './MenuPage.css';
import DishFilter from "./DishFilter";
import MenuSection from "./MenuSection";

function MenuPage(){
    return (
        <>
            <DishFilter />
            <MenuSection />
        </>
    )
}

export default MenuPage;
