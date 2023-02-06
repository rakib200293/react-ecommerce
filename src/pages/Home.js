import React from "react";
import HeroSection from "../components/HeroSection";

const Home = () => {
    const data = {
        name: "Online Store",
    };
    return (
        <div>
            <HeroSection myData={data} />
        </div>
    );
};

export default Home;
