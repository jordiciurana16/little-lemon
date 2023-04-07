import React from "react";
import './HomePage.css';
import HeroSection from "./HeroSection";
import SpecialsSection from "./SpecialsSection";
import TestimonialsSection from "./TestimonialsSection";
import AboutUsSection from "./AboutUsSection";

function HomePage(){
    return (
        <>
            <HeroSection />
            <SpecialsSection />
            <TestimonialsSection />
            <AboutUsSection />
        </>
    )
}

export default HomePage;