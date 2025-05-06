import React from "react";
import bgImage from "../assets/interior-bg.jpg"; // adjust the path as needed

export const Home = () => {
  return (
    <section
      id="home"
      className="relative bg-gray-100 py-20 px-6 md:px-20 text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white">
          Make Your Interior More <br /> Minimalistic & Modern
        </h1>
        <p className="max-w-xl mx-auto text-gray-200 mb-6">
          Turn your room with panto into a lot more minimalist and modern with ease and speed
        </p>
        {/* <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search furniture"
            className="border rounded-l-lg px-4 py-2 w-64"
          />
          <button className="rounded-l-none px-4 py-2 bg-orange-500 text-white hover:bg-orange-600 transition">
            🔍
          </button>
        </div> */}
      </div>
    </section>
  );
};

