// import React from 'react'
// import { assets } from '../assets/assets'

// const Hero = () => {
//   return (
//     <div className='flex flex-col sm:flex-row border border-gray-400'>
//       {/* Hero Left Side */}
//       <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
//             <div className='text-[#414141]'>
//                 <div className='flex items-center gap-2'>
//                     <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
//                     <p className=' font-medium text-sm md:text-base'>PREMIUM INTERIOR</p>
//                 </div>
//                 <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Design Your Space</h1>
//                 <div className='flex items-center gap-2'>
//                     <p className='font-semibold text-sm md:text-base'>EXPLORE IN AR</p>
//                     <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
//                 </div>
//             </div>
//       </div>
//       {/* Hero Right Side */}
//       <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
//     </div>
//   )
// }

// export default Hero


import React from "react";

const Hero = () => {
  return (
  <section
    id="home"
    className="relative overflow-hidden text-white bg-gradient-to-br from-[#667eea] to-[#764ba2] py-[120px] pb-[80px]"
  >
    <div className="max-w-[1200px] mx-auto px-5 text-center">

      {/* 🔹 Main Content */}
      <div className="mb-[60px]">
        <h1 className="text-[3.5rem] font-extrabold mb-5 leading-tight md:text-[2.5rem] sm:text-[2rem]">
          Any passion, any college. <br /> We’re here for you.
        </h1>
        <p className="text-[1.2rem] opacity-90 mb-8 max-w-[600px] mx-auto">
          Traditional college counselling is out of touch and expensive. <br />
          Learning new skills is hard. We pair you with an elder sibling who will guide you through it.
        </p>
      </div>

      {/* 🔹 Floating Cards (animated) */}
      {/* <div className="relative h-[200px]">Card 1</div> */}
    </div>

    {/* 🔹 Float animation keyframes */}
    <style>{`
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }
    `}</style>
    <div
      className="relative flex justify-center items-center group" // group enables container hover
    >
      {/* Github Card */}
      <div
        data-text="Github"
        style={{ "--r": "-15" }}
        className="relative w-[180px] h-[200px] bg-gradient-to-b from-white/10 to-transparent border border-white/10 shadow-[0_25px_25px_rgba(0,0,0,0.25)] flex justify-center items-center transition-all duration-500 rounded-[10px] mx-[-45px] backdrop-blur-[10px]
        [transform:rotate(calc(var(--r)*1deg))] group-hover:[transform:rotate(0deg)] group-hover:mx-[10px]"
      >
        <svg
          viewBox="0 0 496 512"
          height="1em"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white text-[2.5em] fill-white"
        >
          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3..." />
        </svg>
        <div className="absolute bottom-0 w-full h-10 bg-white/5 flex justify-center items-center text-white">
          Github
        </div>
      </div>

      {/* Code Card */}
      <div
        data-text="Code"
        style={{ "--r": "5" }}
        className="relative w-[180px] h-[200px] bg-gradient-to-b from-white/10 to-transparent border border-white/10 shadow-[0_25px_25px_rgba(0,0,0,0.25)] flex justify-center items-center transition-all duration-500 rounded-[10px] mx-[-45px] backdrop-blur-[10px]
        [transform:rotate(calc(var(--r)*1deg))] group-hover:[transform:rotate(0deg)] group-hover:mx-[10px]"
      >
        <svg
          viewBox="0 0 640 512"
          height="1em"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white text-[2.5em] fill-white"
        >
          <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22..." />
        </svg>
        <div className="absolute bottom-0 w-full h-10 bg-white/5 flex justify-center items-center text-white">
          Code
        </div>
      </div>

      {/* Earn Card */}
      <div
        data-text="Earn"
        style={{ "--r": "25" }}
        className="relative w-[180px] h-[200px] bg-gradient-to-b from-white/10 to-transparent border border-white/10 shadow-[0_25px_25px_rgba(0,0,0,0.25)] flex justify-center items-center transition-all duration-500 rounded-[10px] mx-[-45px] backdrop-blur-[10px]
        [transform:rotate(calc(var(--r)*1deg))] group-hover:[transform:rotate(0deg)] group-hover:mx-[10px]"
      >
        <svg
          viewBox="0 0 576 512"
          height="1em"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white text-[2.5em] fill-white"
        >
          <path d="" />
        </svg>
        <div className="absolute bottom-0 w-full h-10 bg-white/5 flex justify-center items-center text-white">
          Earn
        </div>
      </div>
    </div>
  </section>
);

};

export default Hero;
