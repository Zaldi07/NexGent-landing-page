import React, { useState, Fragment } from "react";
import logo from "../assets/Logo.png";
const Nav = () => {
  let [open, setopen] = useState(false);

  //   const navigate = useNavigate();

  let Links = [
    { name: "Home", link: "/" },
    { name: "Features", link: "/Features" },
    { name: "Community", link: "/Features" },
    { name: "Blog", link: "/Features" },
    { name: "Pricing", link: "/about" },
  ];

  return (
    <Fragment>
      <div className="border-2 w-full fixed top-0 right-0 left-0 z-50  ">
        <div className="lg:flex items-center justify-between w-full bg-white pt-2  pr-[10%] pl-[10%]">
          <a className="font-bold text-2xl cursor-pointer h-full flex items-center pb-5 font-inter  text-gray-800" href="/">
            <img src={logo} alt="logo" className="pt-2" />
          </a>
          <div onClick={() => setopen(!open)} className="text-3xl absolute right-8 bottom-2 rounded-lg cursor-pointer lg:hidden  text-primary">
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
          <div className="  ">
            <ul
              className={`-z-20 lg:flex  lg:items-center font-poppins lg:pb-2 pb-12 absolute lg:static bg-white lg:z-auto left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${
                open ? "left-0" : " left-[120%] md:gap-5"
              }`}
            >
              {Links.map((link) => (
                <li
                  key={link.name}
                  className="hover:underline font-inter text-[#
#4D4D4D]underline-offset-8 transition-all duration-400 lg:ml-8 text-sm lg:text-sm font-medium lg:my-0 my-7 "
                >
                  <a href={link.link} className="text-neutral1 hover:text-gray-400 duration-500">
                    {link.name}
                  </a>
                </li>
              ))}
              <div className="lg:pl-10 ">
                <button className="bg-primary px-5 py-1 rounded-lg text-white">
                  <h1 className="flex items-center text-white ">
                    <a href="" className=" text-xs lg:text-sm  font-inter ">
                      Register Now
                    </a>
                    <span className="lg:text-2xl pl-2">
                      <ion-icon name="arrow-forward-outline"></ion-icon>
                    </span>
                  </h1>
                </button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Nav;
