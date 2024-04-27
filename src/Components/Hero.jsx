import React from "react";
import Typed from "react-typed";
const Hero = () => {
  return (
    <div className=" text-white">
      <div className=" max-w-[800px] mt-[-40] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className=" text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className=" md:text-7xl text-gray-500 sm:text-6xl text-4xl font-bold md:py-6">
          GROW WITH DATA.
        </h1>
        <div className=" flex justify-center items-center">
          <p className=" md:text-5xl text-gray-500 sm:text-4xl text-xl font-bold py-4">
            Fast, flexible financing for
          </p>
          <Typed
            className=" md:text-5xl text-gray-500 sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className=" md:text-2xl text-xl text-gray-500 font-bold">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms.
        </p>
        <button className="bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto py-3">
          Get started
        </button>
      </div>
    </div>
  );
};

export default Hero;
