import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from "../../assets/banner/banner1.png";
import bannerImg2 from "../../assets/banner/banner2.png";
import bannerImg3 from "../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <Carousel autoPlay= {true} infiniteLoop = {true}>
      <div className="relative">
        <img src={bannerImg1} />
        <div className="absolute -bottom-2 left-8 -translate-y-1/2 z-50  text-black  flex gap-10">
          <button className=" border border-gray-300 bg-lime-200 px-3 py-2 rounded-3xl  cursor-pointer font-semibold ">Track your parcel</button>
          <button className=" border-2 border-gray-300 px-3 py-2 rounded-3xl  cursor-pointer font-semibold">Be a Rider</button>
        </div>
      </div>

      <div className="relative">
        <img src={bannerImg2} />
        <div className="absolute -bottom-2 left-8 -translate-y-1/2 z-50  text-black  flex gap-10">
          <button className=" border border-gray-300 bg-lime-200 px-3  rounded-3xl cursor-pointer font-semibold">Track your parcel</button>
          <button className=" border-2 border-gray-300 px-3 py-2 rounded-3xl  cursor-pointer font-semibold">Be a Rider</button>
        </div>
      </div>

      <div className="relative">
        <img src={bannerImg3} />
        <div className="absolute -bottom-2 left-8 -translate-y-1/2 z-50  text-black  flex gap-10">
          <button className=" border border-gray-300 bg-lime-200 px-3  rounded-3xl  cursor-pointer font-semibold">Track your parcel</button>
          <button className=" border-2 border-gray-300 px-3 py-2 rounded-3xl  cursor-pointer font-semibold">Be a Rider</button>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
