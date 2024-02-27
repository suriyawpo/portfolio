import React from "react";
import Img from "./about.png";
import AboutDetails from "./About-details";
const App = () => {
  
  return (
    <>
         <section id='about' className='bg-yellow-500 text-white py-16'>
          <div className=' container  mx-auto'>
            <div class="flex items-center justify-center font-bold text-xl">
              <div class="w-14 border-t-2  border-gray-800"></div>
              <h4 className="mx-4">A Little <span className='text-red-500'>About </span>Me</h4>
              <div class="w-14 border-t-2  border-gray-800"></div>
            </div>
            <div className='pt-8 flex gap-16 flex-col md:justify-between md:items-center md:flex-row'>
               <div className='hidden flex-1 bg-slate-50  rounded-xl'>
                  <img className='size-80' src={Img}/>
               </div>
               <div className='flex-1 '>
                 <p className='text-justify indent-8'> I am a passionate and detail-oriented Full Stack Web Developer with a focus on the MERN (MongoDB, Express.js, React, Node.js) stack. My goal is to create seamless, user-friendly web applications that provide a positive user experience.</p>
               </div>
            </div>
            <AboutDetails/>            
          </div>
        </section>
    </>
  );
};

export default App;

           