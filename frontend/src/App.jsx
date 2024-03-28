import React from "react";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Business from "./components/Business";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Img from "./components/assets/ss.jpg";
const App = () => {
    return (
        <>
            <div className="font-inter tracking-wide bg-bgh scroll-smooth text-[16px] sm:text[17px] xl:text-[18px]">
                <Home />
                <Skills />
                <About />

                <Portfolio />
                <Contact />
                <Footer />
            </div>
        </>
    );
};

export default App;
