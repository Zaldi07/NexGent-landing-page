import React from "react";
import img from "../assets/img2.png";
const LayoutFlex = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between pt-10">
      <div className="lg:w-[40% ">
        <img src={img} alt="" className="w-full" />
      </div>
      <div className="md:w-[60%]  gap-4">
        <h1 className="font-inter text-neutral1  text-lg lg:text-4xl font-bold">
          The unseen of spending three <br />
          years at Pixelgrade
        </h1>
        <p className="font-inter text-neutral2 py-5 text-sm lg:text-base font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem
          sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum
          pulvinar odio.
        </p>
        <button className="bg-primary py-3 px-8 text-white rounded-md">Learn More</button>
      </div>
    </div>
  );
};

export default LayoutFlex;
