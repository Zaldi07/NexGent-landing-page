import React from "react";
import Footer2 from "../UI/Footer2";

const Footer = () => {
  return (
    <div className="mt-5 bg-[#f5f7faff]  h-full pt-16">
      <div className="mx-auto  items-center flex flex-col justify-center gap-10 pr-[10%] pl-[10%] pb-8">
        <h1 className=" text-[#263238] text-center text-4xl md:text-6xl font-inter font-semibold lg:w-[60%] ">Pellentesque suscipit fringilla libero eu.</h1>
        <button className="flex bg-primary px-6 py-2 rounded-sm">
          <h1 className="flex items-center text-white ">
            <a href="" className=" text-xs lg:text-sm font-bold font-inter ">
              Get A demo
            </a>
            <span className="lg:text-xl pl-2">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </span>
          </h1>
        </button>
      </div>
      <Footer2 />
    </div>
  );
};

export default Footer;
