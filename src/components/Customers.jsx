import React from "react";
import img from "../assets/img9.png";
import logo from "../assets/logo2.png";
const Customers = () => {
  return (
    <div className="bg-bg2 pr-[10%] pl-[10%] h-full py-8 flex md:gap-10  flex-col md:flex-row ">
      <div className="lg:w-[30%]">
        <img src={img} alt="" className="w-full" />
      </div>
      <div className="md:w-[70%]">
        <h1 className=" lg:text-base  text-sm  font-inter text-neutral2 lg:py-5 font-normal  ">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare,
          tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed
          augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante
          feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
        </h1>
        <h1 className="text-primary lg:text-lg font-semibold lg:py-2 lg:pt-0 pt-2">Tim Smith</h1>
        <p className="text-neutral2 pb-5 lg:pb-8 text-base">British Dragon Boat Racing Association</p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-2  justify-between ">
          <img src={logo} alt="" className="lg:w-[60%] w-full md:h-1/2" />

          <h1 className="flex items-center text-primary justify-center sm:justify-normal">
            <a href="" className=" text-xs lg:text-lg font-semibold font-inter ">
              Meet all customers
            </a>
            <span className="lg:text-2xl pl-2">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Customers;
