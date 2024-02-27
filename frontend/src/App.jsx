import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Contact from './components/Contact';
import Img from "./ss.jpg";
const App = () => {
  
  return (
    <>
      <div className='font-inter tracking-wide bg-black'>
        <Navbar />
        <Home/>
        <About/>
        
        <Contact/>
        <img src={Img}/>
        <Footer/>
      </div>
    </>
  );
};

export default App;