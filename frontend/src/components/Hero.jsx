import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
  <section
    id="home"
    // className="relative overflow-hidden text-white bg-gradient-to-br from-[#667eea] to-[#764ba2] py-[120px] pb-[80px]"
    // className=" relative overflow-hidden py-[130px] pb-[80px] bg-[linear-gradient(to_bottom,#fff_0%,#fff_40%,rgba(255,255,255,0)_100%),linear-gradient(to_right,orange,orange)] before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(90deg,#ccc_1px,transparent_1px)] before:bg-[length:50px_100%] before:pointer-events-none before:[mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_70%)] before:[-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_70%)]"
     className="relative overflow-hidden w-[120%] -ml-[10%] py-[163px] pb-[80px] rounded-3xl
bg-[linear-gradient(to_bottom,#fff_0%,#fff_40%,rgba(255,255,255,0)_100%),linear-gradient(to_right,transparent_0%,rgba(255,165,0,0.6)_3%,rgba(255,165,0,0.8)_5%,orange_10%,orange_90%,rgba(255,165,0,0.8)_95%,rgba(255,165,0,0.6)_97%,transparent_100%)]
before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(90deg,#ccc_1px,transparent_1px)]
before:bg-[length:50px_100%] before:pointer-events-none before:[mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_70%)]
before:[-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_70%)]">

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

    {/* Left stacked cards */}
    <div className="hidden lg:block absolute left-[30px] top-10">
      <div className="relative w-[220px] h-[550px]">
        <div className="absolute top-[0px] left-6 rotate-[-7deg] bg-[#fde047] text-black w-[178px] rounded-[22px] shadow-xl p-3">
          <div className="rounded-[18px] overflow-hidden h-[120px] mb-3">
            <img src={assets.Hrishikesh_Surlekar} alt="mentor" className="w-full h-full object-cover" />
          </div>
          <p className="text-[14px] leading-5 font-semibold">
          Duke University
          </p>
        </div>
        <div className="absolute top-[180px] left-0 rotate-[12deg] bg-[#bfdbfe] text-black w-[178px] rounded-[22px] shadow-xl p-3">
          <div className="rounded-[18px] overflow-hidden h-[120px] mb-3">
            <img src={assets.Anoushka_Shinde} alt="mentor" className="w-full h-full object-cover" />
          </div>
          <p className="text-[14px] leading-5 font-semibold">
          Indiana University, Bloomington, MS Data Science
          </p>
        </div>
        <div className="absolute bottom-[-20px] left-10 rotate-[-15deg] bg-[#fbcfe8] text-black w-[178px] rounded-[22px] shadow-xl p-3">
          <div className="rounded-[18px] overflow-hidden h-[120px] mb-3">
            <img src={assets.Soham_Pawaskar} alt="mentor" className="w-full h-full object-cover" />
          </div>
          <p className="text-[14px] leading-5 font-semibold">
          University of Maryland
          </p>
        </div>
      </div>
    </div>
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
          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.2-1.3-5.2-3.6 0-2 2.3-3.6 5.2-3.6 3.3-.3 5.2 1.3 5.2 3.6zM142.7 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.2-1.3-5.2-3.6 0-2 2.3-3.6 5.2-3.6 3.3-.3 5.2 1.3 5.2 3.6zM119.5 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.2-1.3-5.2-3.6 0-2 2.3-3.6 5.2-3.6 3.3-.3 5.2 1.3 5.2 3.6z" />
        </svg>
        <div className="absolute bottom-0 w-full h-10 bg-white/5 flex justify-center items-center text-white">
          Shravan Parkar
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
        </svg>
        <div className="absolute bottom-0 w-full h-10 bg-white/5 flex justify-center items-center text-white">
          Yugandhar Dhore
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
        </svg>
        <div className="absolute bottom-0 w-full h-10 bg-white/5 flex justify-center items-center text-white">
          Vedant Pawar
        </div>
      </div>
    </div>

    {/* Right stacked cards */}
    <div className="hidden lg:block absolute right-[30px] top-8">
      <div className="relative w-[220px] h-[520px]">
        <div className="absolute top-[-10px] right-6 rotate-[20deg] bg-[#fbcfe8] text-black w-[178px] rounded-[22px] shadow-xl p-3">
          <div className="rounded-[18px] overflow-hidden h-[120px] mb-3">
            <img src={assets.Kritik_Shetty} alt="mentor" className="w-full h-full object-cover" />
          </div>
          <p className="text-[14px] leading-5 font-semibold">
          Frankfurt School of Finance and Management, Germany
          </p>
        </div>
        <div className="absolute top-[213px] right-2 rotate-[-7deg] bg-[#bfdbfe] text-black w-[178px] rounded-[22px] shadow-xl p-3">
          <div className="rounded-[18px] overflow-hidden h-[120px] mb-3">
            <img src={assets.Shardul_Datar} alt="mentor" className="w-full h-full object-cover" />
          </div>
          <p className="text-[14px] leading-5 font-semibold">
          University of Southern California MS
          </p>
        </div>
        <div className="absolute bottom-[-80px] right-8 rotate-[6deg] bg-[#fde047] text-black w-[178px] rounded-[22px] shadow-xl p-3">
          <div className="rounded-[18px] overflow-hidden h-[120px] mb-3">
            <img src={assets.Somita_Chaudhari} alt="mentor" className="w-full h-full object-cover" />
          </div>
          <p className="text-[14px] leading-5 font-semibold">
          IT University of Maryland Baltimore
          </p>
        </div>
      </div>
    </div>
  </section>
);

};

export default Hero;
