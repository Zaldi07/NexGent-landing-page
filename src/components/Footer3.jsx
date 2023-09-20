import React from "react";

import logo from "../assets/logo";
import copyright from "../../../assets/component/UI/footer/cpyr1.png";

function Footer() {
  return (
    <div className="bg-[#263238] font-sans py-5 w-screen md:p-7 lg:p-16">
      <div className="pl-[5%] pr-[5%] md:grid grid-cols-2">
        <div className="w-3/5">
          <div className="flex mb-10">
            <img src={logo} alt="" className="w-10 h-10 object-fill mr-2" />
            <h1 className="text-white text-3xl font-bold">Nexcent</h1>
          </div>
          <div className="hidden md:block">
            <p className="text-[#F5F7FA] flex text-sm">
              Copyright
              <img src={copyright} alt="" className="mx-1 h-5 top-1" /> Landify UI Kit.
            </p>
            <p className="text-[#F5F7FA] text-sm">All rights reserved </p>
          </div>

          <div className="grid grid-cols-4 my-3 gap-3 sm:gap-1   w-screen sm:w-full md:mt-10 mb-7">
            <div className="bg-slate-600 rounded-full w-9 h-9 pl-2 pt-2">
              <img src={ig} alt="" className="w-5 h-5 " />
            </div>
            <div className="bg-slate-600 rounded-full w-9 h-9 pl-[6px] pt-1 lg:-ml-5">
              <span className="text-white text-2xl">
                <ion-icon name="basketball-outline"></ion-icon>
              </span>
            </div>
            <div className="bg-slate-600 rounded-full w-9 h-9 pl-2 pt-2 lg:-ml-10">
              <img src={twt} alt="" className="w-5 h-5 " />
            </div>
            <div className="bg-slate-600 rounded-full w-9 h-9 pl-2 pt-2 lg:-ml-14">
              <img src={yt} alt="" className="w-5 h-5 " />
            </div>
          </div>
        </div>

        <div className=" grid grid-cols-2 md:grid-cols-3 w-full  md:-ml-14">
          <div className="">
            <h1 className="text-white text-xl font-semibold mb-7">Company</h1>
            <div className="grid gap-4 text-[#F5F7FA]">
              <a href="# " className=" text-sm">
                About us
              </a>
              <a href="# " className=" text-sm">
                Blog
              </a>
              <a href="# " className=" text-sm">
                Contact us
              </a>
              <a href="# " className=" text-sm">
                Pricing
              </a>
              <a href="# " className=" text-sm">
                Testimonials
              </a>
            </div>
          </div>

          <div className="">
            <h1 className="text-white text-xl font-semibold mb-7">Support</h1>
            <div className="grid gap-4 text-[#F5F7FA]">
              <a href="# " className="  text-sm">
                Help center
              </a>
              <a href="# " className=" text-sm">
                Terms of service
              </a>
              <a href="# " className=" text-sm">
                Legal
              </a>
              <a href="# " className=" text-sm">
                Privacy policy
              </a>
              <a href="# " className=" text-sm">
                Status
              </a>
            </div>
          </div>

          <div className="  ">
            <div className="w-full">
              <h1 className="text-white text-xl font-semibold mb-7 mt-10 md:mt-0  ">Stay up to date</h1>
            </div>
            <div className="mb-10 flex">
              <input type="email" placeholder="Your email address" className="rounded-l bg-slate-600 h-12 pl-3 w-full md:w-36 lg:w-40" />
              <div className="">
                <button className="bg-slate-600  text-white rounded-r w-10 h-12">
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between border-t  md:hidden">
            <p className="text-[#F5F7FA] flex     md: pt-3">
              Copyright
              <img src={copyright} alt="" className="mx-1 h-5 " /> Landify UI Kit.
            </p>
            <p className="text-[#F5F7FA] mt-3">All rights reserved </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
