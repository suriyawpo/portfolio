import React from "react";
import Image from "././contact.png";
import Form from "./Form";
const App = () => {
  
  return (
    <>
         <section id='contact' className='bg-gray-900 text-white'>
           <div className='container py-16 '>
            <p className=' text-xl font-bold capitalize mb-16 text-center'>contact <span className='text-red-500'>me</span></p>
            <div class="w-full flex flex-col  gap-8 md:flex-row items-center justify-between">
              <div className='flex-1 text-center'>
                <img className='size-80 mx-auto' src={Image}/>
              </div>
              <div className=' flex-1'>
                <div className='mx-auto mt-8'>
                   
                   <Form/>
                 
                </div>
              </div>
            </div>
           </div>
         </section>
    </>
  );
};

export default App;

           