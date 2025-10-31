import React from "react";
import { assets } from "../assets/assets";

const UniversitySlider = () => {
  const universities = [
    { image: assets.harvard },
    { image: assets.stanford },
    { image: assets.Brown_University},
    { image: assets.Caltech_University},
    { image: assets.Cambridge_University},
    { image: assets.Chicago_University},
    { image: assets.Columbia_University},
    { image: assets.Cornell_Univerity},
    { image: assets.Dartmouth_University},
    { image: assets.Duke_University},
    { image: assets.Johns_Hopkins_University},
    { image: assets.Northwestern_University},
    { image: assets.MIT},
    { image: assets.Oxford_University},
    { image: assets.Pennsylvania_University},
    { image: assets.Princeton_University},
    { image: assets.Rice_University},
    { image: assets.Vanderbilt_University},
    { image: assets.Washington_University},
    { image: assets.Yale_University},
  ];

  // Duplicate slides for seamless infinite loop
  const duplicatedUniversities = [...universities, ...universities];

  return (
    <div className="flex flex-col justify-center items-center h-[60vh] bg-black p-10 overflow-hidden">
      <h2 className="text-white text-center mb-10 text-4xl md:text-5xl font-bold tracking-wide">
        Universities Where Our Mentors Are From
      </h2>

      {/* Scrolling container */}
      <div className="w-[98%]  overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          {duplicatedUniversities.map((university, index) => (
            <div
              key={index}
              className="flex justify-center items-center w-[20%] min-w-[250px] mx-6"
            >
              <img
                src={university.image}
                alt={`University ${index + 1}`}
                className="w-64 h-40 object-contain brightness-110 hover:scale-105 transition-transform duration-900"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UniversitySlider;
