import React,{useState} from "react";

const App = ()=>{
  
  const [show,setShow]=useState(1);
  
  return (
    <>
    
    
      <div className='hidden text-center text-md font-semibold space-x-8 mt-8'>
        <button className={`${show==1 ? 'thistry' : ''} border px-3 py-1 rounded-xl`} onClick={()=>{setShow(1)}}>Education</button>
        <button className={`${show==2 ? 'thistry' : ''}`} onClick={()=>{setShow(2)}}>Technologies</button>
        <button className={`${show==3 ? 'thistry' : ''}`} onClick={()=>{setShow(3)}}>Experience</button>                 
      </div>
      {
      <div className='hidden text-center mt-8 border rounded-xl p-8 text-white bg-primary-light shadow'>
        {show==1 && (
           <div className='space-y-4  text-left'>
              <p className='text-lg font-medium'>B.E, Mechanical Engineering</p>
              <p className=''>2018-2022</p>
              <p className='text-md'>Mailam engineering college, Anna University</p>
           </div>
        )}
        {show==2 && (
           <div className='space-y-4 text-left'>
              <p className='text-lg font-medium'>Frontend technologies</p>
              <p className=''>HTML, Reactjs, Tailwindcss</p>
              <p className='text-lg font-medium'>Backend technologies</p>
              <p className=''>Nodejs, Mongodb</p>
           </div>
        )}        
       </div>
      }
      
      
      {/*
      
      <div className='flex flex-col md:flex-row md:justify-center gap-8 mt-8'>
      
      <div className=' flex-1 rounded-xl p-4 text-white  shadow shadow-cyan-200'>
        <div className='w-fit mx-auto mb-8'>
          <svg fill="yellow" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"/></svg>
        </div>
        <div className='space-y-4  text-center'>
             <p className='text-lg font-medium text-cyan-300'>B.E, Mechanical Engineering</p>
             <p className=''>2018-2022</p>
             <p className='text-md'>Mailam engineering college, Anna University</p>
         </div>       
       </div>
       
      <div className=' flex-1 p-4 rounded-xl  text-white shadow shadow-cyan-200'>
        <div className='w-fit mx-auto mb-8'>
          <svg fill="yellow" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64c-35.3 0-64 28.7-64 64H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64c0 35.3 28.7 64 64 64v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448c35.3 0 64-28.7 64-64h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V280h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V176h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448c0-35.3-28.7-64-64-64V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H280V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H176V24zM160 128H352c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zm192 32H160V352H352V160z"/></svg>
        </div>
        <div className='text-lg font-medium text-cyan-300'>Frontend technologies
              <ul className='list-disc text-base ml-4 text-white'>
              <li>HTML</li>
              <li>Tailwindcss</li>
              <li>Reactjs</li>
              </ul>
        </div>
        <div className='mt-8 text-lg font-medium text-cyan-300'>Backend technologies
              <ul className='list-disc text-base ml-4 text-white'>
              <li>Nodejs</li>
              <li>Mongodb</li>
              <li>Express</li>
              </ul>
        </div>          
       </div>
       <div className=' flex-1 p-4  rounded-xl  text-white shadow shadow-cyan-200'>
        b
       </div>
      </div>
      */}
    </>
  );
};

export default App;