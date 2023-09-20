import React from "react";
import img1 from "../assets/client1.png";
import img2 from "../assets/client2.png";
import img3 from "../assets/client3.png";
import img4 from "../assets/client4.png";
import img5 from "../assets/client5.png";
import img6 from "../assets/logoclient.png";
import imgcard from "../assets/cardimg.png";
import imgcard2 from "../assets/comunityimage2.png";
import imgcard3 from "../assets/comunityimage3.png";

import LayoutFlex from "../UI/LayoutFlex";
const Client = () => {
  return (
    <div className="pr-[10%] pl-[10%] h-full py-10">
      <div className="text-center font-inter">
        <h1 className="text-[#4D4D4D] text-3xl font-semibold">Our Client</h1>
        <h1 className="text-neutral2 text-lg pt-3">We have been working with some Fortune 500+ clients</h1>
      </div>
      <div className="grid  grid-cols-7 py-14  items-start  gap-3 sm:ga">
        <div className="flex justify-center">
          <img src={img1} alt="" className="lg:w-[25%]" />
        </div>
        <div className="flex justify-center">
          <img src={img2} alt="" className="lg:w-[25%]" />
        </div>
        <div className="flex justify-center">
          <img src={img3} alt="" className="lg:w-[25%]" />
        </div>
        <div className="flex justify-center">
          <img src={img4} alt="" className="lg:w-[25%]" />
        </div>
        <div className="flex justify-center">
          <img src={img5} alt="" className="lg:w-[25%]" />
        </div>
        <div className="flex justify-center">
          <img src={img6} alt="" className="lg:w-[25%]" />
        </div>
        <div className="flex justify-center">
          <img src={img3} alt="" className="lg:w-[25%]" />
        </div>
      </div>
      <div className="text-center font-inter">
        <h1 className="text-[#4D4D4D] text-3xl font-semibold">
          Manage your entire community <br />
          in a single system
        </h1>
        <h1 className="text-neutral2 text-lg font-inter  pt-3">Who is Nextcent suitable for?</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 sm:gap-5 lg:gap-32 pt-10">
        <div className="shadow-md flex flex-col items-center p-4 gap-3 pb-8 rounded-lg ">
          <div>
            <img src={imgcard} alt="" className="" />
          </div>
          <div className="sm:text-xl lg:text-3xl  font-inter font-bold text-neutral1 text-center">Membership Organisations</div>
          <div className=" text-center justify-center text-neutral2">Our membership management software provides full automation of membership renewals and payments</div>
        </div>
        <div className="shadow-md flex flex-col items-center p-4 gap-3 pb-8 rounded-lg ">
          <div>
            <img src={imgcard2} alt="" className="" />
          </div>
          <div className="sm:text-xl lg:text-3xl  font-inter font-bold text-neutral1 text-center">National Associations</div>
          <div className="text-center justify-center text-neutral2">Our membership management software provides full automation of membership renewals and payments</div>
        </div>
        <div className="shadow-md flex flex-col items-center p-4 gap-3 pb-8 rounded-lg ">
          <div>
            <img src={imgcard3} alt="" className="" />
          </div>
          <div className=" sm:text-xl lg:text-3xl  font-inter font-bold text-neutral1 text-center">
            Clubs <br /> And Groups
          </div>
          <div className="text-center justify-center text-neutral2">Our membership management software provides full automation of membership renewals and payments</div>
        </div>
      </div>
      <LayoutFlex />
    </div>
  );
};

export default Client;
