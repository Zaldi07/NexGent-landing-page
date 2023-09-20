import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import Client from "./Client";
import Achievment from "./Achievment";
import LayoutFlex from "../UI/LayoutFlex2";
import Customers from "./Customers";
import Community from "./Community";
import Footer from "./Footer";

const Main = () => {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <Nav />
      <Home />
      <Client />
      <Achievment />
      <LayoutFlex />
      <Customers />
      <Community />
      <Footer />
    </div>
  );
};

export default Main;
