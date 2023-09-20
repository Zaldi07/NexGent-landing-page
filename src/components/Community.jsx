import React from "react";
import CardComunity from "../UI/CardComunity";
import Cardimg from "../assets/comunityimage.png";
import Cardimg3 from "../assets/cardimg3.png";
import Cardimg2 from "../assets/cardimg2.png";
// import Cardimg3 from "../assets/cardimg3.png.png";
const Community = () => {
  return (
    <div className=" pr-[10%] pl-[10%] h-full pb-32 pt-20">
      <div className="text-center font-inter mx-auto lg:w-1/2">
        <h1 className="text-[#4D4D4D] text-3xl font-semibold text-center">Caring is the new marketing</h1>
        <h1 className="text-neutral2 text-medium font-inter pt-3">
          The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are
          increasing their membership income and lot's more.​
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-36 pt-5">
        <CardComunity image={Cardimg} text="Creating Streamlined Safeguarding Processes with OneRen" />
        <CardComunity image={Cardimg3} text="What are your safeguarding responsibilities and how can you manage them?" />
        <CardComunity image={Cardimg2} text="Revamping the Membership Model with Triathlon Australia" />
      </div>
    </div>
  );
};

export default Community;
