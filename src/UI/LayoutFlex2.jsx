import React from "react";
import img from "../assets/pana.png";
const LayoutFlex = () => {
  return (
    <div className="pr-[10%] pl-[10%] h-full py-10">
      <div className="flex flex-col md:flex-row items-center justify-between pt-10 ">
        <div className="md:w-[40%]">
          <img src={img} alt="" className="w-full" />
        </div>
        <div className="md:w-[60%]  gap-4 lg:pt-0 pt-5">
          <h1 className="font-inter text-neutral1  text-lg lg:text-4xl font-bold">
            How to design your site footer like <br className="sm:block hidden" />
            we did
          </h1>
          <p className="font-inter text-neutral2 py-5 text-sm lg:text-base font-normal">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis
            erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec
            consectetur faucibus ipsum id gravida.
          </p>
          <button className="bg-primary py-3 px-8 text-white rounded-md">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default LayoutFlex;
