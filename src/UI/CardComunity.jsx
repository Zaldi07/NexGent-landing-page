import React from "react";
const CardComunity = (props) => {
  return (
    <div className="relative">
      <div className="overflow-hidden">
        <img src={props.image} alt="" className="w-full rounded-2xl" />
      </div>
      <div className="bg-[#f5f7faff] w-[80%] sm:h-[150px]  lg:h-[200px]  px-2 rounded-2xl absolute  right-7 sm:right-4 lg:right-10 bottom-[-90px] py-8  shadow-lg">
        <h1 className="font-inter sm:text-xs lg:text-xl   font-semibold text-center text-[#717171] sm:h-[70%] lg:h-[70%]">{props.text}</h1>

        <h1 className="flex items-center  text-primary justify-center  pt-5">
          <a href="" className=" text-xs lg:text-lg font-bold font-inter ">
            Readmore
          </a>
          <span className="lg:text-2xl pl-2">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default CardComunity;
