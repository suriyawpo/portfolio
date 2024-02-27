import React from "react";
import Img from "./portfolio1.jpg"
const App = () => {
  
  return (
    <>
      <div className='text-white bg-primary-light '>
         <div className='container py-16'>
            <p className='pb-8 text-xl font-bold text-center'>My <span className='text-cyan-200'>Portfolio</span></p>
            <div className='grid grid-cols-2 gap-8 md:grid-cols-3'>
              <div className=''>
                <img src={Img}/>
              </div>
              <div className=''>
                <img src={Img}/>
              </div>              
            </div>
         </div>
      </div>
    </>
  );
};

export default App;