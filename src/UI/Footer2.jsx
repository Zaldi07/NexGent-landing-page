import React from "react";
import { BsFacebook, BsYoutube, BsTwitter, BsInstagram } from "react-icons/bs";
import { BiLogoBlogger } from "react-icons/bi";
import logo from "../assets/logowhite.png";
const Footer2 = () => {
  return (
    <div className="bg-[#263238ff] pr-[10%] pl-[10%] pb-10">
      <div className=" grid grid-cols-1 md:grid-cols-3  py-10 sm:gap-12 lg:gap-36 ">
        <div className="sm:pt-5 lg:pt-0">
          <img src={logo} alt="" className="w-1/2" />
          <h1 className="text-white  text-sm pt-4 lg:pt-10">Copyright © 2023 E-Learn.</h1>
          <h1 className="text-white  text-sm pt-2 "> All Right Reserved</h1>

          <div className="hidden sm:flex gap-3 pt-6 pb-5">
            <div className="bg-[#404040ff] w-10 h-10 lg:w-12 lg:h-12 rounded-full sm:text-lg lg:text-2xl flex items-center justify-center text-white">
              <BsFacebook />
            </div>
            <div className="bg-[#404040ff] w-10 h-10 lg:w-12 lg:h-12 rounded-full sm:text-lg lg:text-2xl flex items-center justify-center text-white">
              <BiLogoBlogger />
            </div>
            <div className="bg-[#404040ff] w-10 h-10 lg:w-12 lg:h-12 rounded-full sm:text-lg lg:text-2xl flex items-center justify-center text-white">
              <BsTwitter />
            </div>
            <div className="bg-[#404040ff] w-10 h-10 lg:w-12 lg:h-12 rounded-full sm:text-lg lg:text-2xl flex items-center justify-center text-white">
              <BsYoutube />
            </div>
          </div>
        </div>

        <div className="flex  gap-10 lg:gap-20 lg:pt-0 pt-5 font-inter">
          <div className="text-white  ">
            <h1 className="text-white pb-4 font-semibold text-lg">Company</h1>
            <div className="text-[#F5F7FA]  flex flex-col gap-4 text-sm ">
              <h1>About Us</h1>
              <h1>Blog</h1>
              <h1>Contact Us</h1>
              <h1>Pricing</h1>
              <h1>Testimonial</h1>
            </div>
          </div>
          <div className="text-white ">
            <h1 className="pb-4 font-semibold text-lg ">Support</h1>
            <div className=" text-[#F5F7FA] flex flex-col gap-4 text-sm">
              <h1>Help center</h1>
              <h1>Terms of service</h1>
              <h1>Legal</h1>
              <h1>Privacy policy</h1>
              <h1>Status</h1>
            </div>
          </div>
        </div>
        <div className="text-white md:pt-5  pt-4 lg:pt-0 ">
          <h1 className=" font-semibold text-lg">Get Latest Information</h1>
          <div className="pt-5 flex">
            <input type="email" placeholder="Your email address" className="rounded-l bg-slate-600 h-12 pl-3 w-full md:w-36 lg:w-52" />
            <div className="">
              <button className="bg-slate-600  text-white rounded-r w-10 h-12">
                <ion-icon name="paper-plane-outline"></ion-icon>
              </button>
            </div>
          </div>

          <div className="flex sm:hidden gap-3 pt-6 pb-5">
            <div className="bg-[#3c474cff] w-12 h-12 rounded-full text-lg flex items-center justify-center text-white">
              <BsFacebook />
            </div>
            <div className="bg-[#3c474cff] w-12 h-12 rounded-full text-lg flex items-center justify-center text-white">
              <BiLogoBlogger />
            </div>
            <div className="bg-[#3c474cff] w-12 h-12 rounded-full text-lg flex items-center justify-center text-white">
              <BsYoutube />
            </div>
            <div className="bg-[#3c474cff] w-12 h-12 rounded-full text-lg flex items-center justify-center text-white">
              <BsTwitter />
            </div>
            <div className="bg-[#3c474cff] w-12 h-12 rounded-full text-lg flex items-center justify-center text-white">
              <BsInstagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
