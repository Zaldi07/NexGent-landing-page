import React from "react";
import img from "../assets/member.png";
import img2 from "../assets/member2.png";
import img3 from "../assets/member3.png";
import img4 from "../assets/member4.png";
const Achievment = () => {
  return (
    <div className="bg-bg2 pr-[10%] pl-[10%] h-full py-16">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col gap-1">
          <h1 className="text-neutral1 lg:text-4xl font-semibold font-inter text-2xl">
            Helping a local <br />
          </h1>
          <h1 className="text-primary  lg:text-4xl font-semibold font-inter text-2xl">business reinvent itself</h1>
          <h1 className="text-[#18191F] font-inter font-normal pt-2">We reached here with our hard work and dedication</h1>
        </div>
        <div className="grid grid-cols-2 pt-4 lg:pt-0 gap-5 sm:gap-0 ">
          <div className="flex items-center gap-4 lg:pb-10">
            <img src={img} alt="" className="sm:w-[15%]" />
            <div>
              <h1 className="font-bold font-inter text-xl sm:text-2xl text-neutral1 ">2,245,341</h1>
              <h1 className="font-normal text-[##717171]">Member</h1>
            </div>
          </div>
          <div className="flex items-center gap-4 lg:pb-10">
            <img src={img3} alt="" className=" sm:w-[15%]" />
            <div>
              <h1 className="font-bold font-inter  text-xl sm:text-2xl text-neutral1 ">46,328</h1>
              <h1 className="font-normal text-[##717171]">Clubs</h1>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src={img2} alt="" className=" sm:w-[15%]" />
            <div>
              <h1 className="font-bold font-inter text-xl sm:text-2xl text-neutral1 ">828,867</h1>
              <h1 className="font-normal t text-[##717171]">Event Bookings</h1>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src={img4} alt="" className=" sm:w-[15%]" />
            <div>
              <h1 className="font-bold font-inter text-xl sm:text-2xl text-neutral1 ">1,926,436</h1>
              <h1 className=" font-normal text-[##717171]">Payments</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievment;
