import React from "react";
import './MenuPage.css';
import DishFilter from "./DishFilter";
import MenuSection from "./MenuSection";
import OffersSection from "./OffersSection";

function MenuPage(){
    return (
        <>
            <DishFilter />
            <MenuSection />
            <OffersSection />
        </>
    )
}

export default MenuPage;
