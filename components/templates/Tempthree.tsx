"use client";
import React from "react";
import Image from "next/image";
import eg3 from "../../app/assets/banners/eg3.png";
import cake2 from "../../app/assets/cake2.jpeg"
import { useMyContext } from "../../context/Mycontext";
const Tempthree = () => {
  const { bannerDetails, setBannerDetails, banners, setBanners} = useMyContext();
  return (
    <div>
      <div
        className="relative w-[600px] h-[600px] m-4 overflow-hidden rounded-lg"
        style={{
          backgroundImage: `url(${eg3.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h3 className="absolute  top-[52px] left-[170px] text-white text-[2.25rem] w-[40%] flex flex-wrap text-center font-bold">
        {banners[2].title}
        </h3>
        <p className="absolute  top-[200px] left-[170px] text-center w-[40%] flex items-center text-xl justify-center flex-wrap "> {banners[2].description}</p>
        <p className="bg-[#44c9f6] text-white absolute bottom-[38px] right-[47px] rounded-xl px-5 py-2 " > {banners[2].button}</p>
        {/* <div 
        className="absolute top-[200px] left-[20px] bg-slate-700 rounded-full " 
        style={{
          backgroundImage: `url(${eg4.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        ></div> */}
     <Image 
  src={banners[2].imageUrl? banners[2].imageUrl : cake2}
  width={270} 
  height={270} 
  alt="your image" 
  className="rounded-full absolute bottom-[45px] left-[38px] object-cover"
/>

      </div>
    </div>
  );
};

export default Tempthree;
