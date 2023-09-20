import React from "react";
import image from "../assets/image1.png";
const Home = () => {
  return (
    <div className=" pr-[10%] pl-[10%]   bg-[#F5F7FA]  lg:h-screen py-20">
      <div className="flex  sm:flex-row flex-col justify-between mt-10  items-center">
        <div className="sm:w-[60%] w-full  ">
          <h1 className="text-4xl lg:text-6xl font-inter font-semibold text-[#4D4D4D] lg:leading-[70px]">
            Lessons and insights <span className="text-primary">from 8 years</span>
          </h1>
          <h1 className="text-[#717171] sm:text-xs  md:text-lg font-inter font-normal py-5 ">Where to grow your business as a photographer: site or social media?</h1>
          <button className="bg-primary text-white font-inter px-6 py-2 sm:px-6 sm:py-2 "> Register</button>
        </div>
        <div className="sm:w-[35%] w-full sm:pt-0 pt-10">
          <img src={image} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;
