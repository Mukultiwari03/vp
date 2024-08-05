"use client";
import React from "react";
import Image from "next/image";
import eg1 from "../../app/assets/banners/eg1.png";
import cake2 from "../../app/assets/cake2.jpeg"
import { useMyContext } from "../../context/Mycontext";
const Tempone = () => {
  const { bannerDetails, setBannerDetails, banners, setBanners} = useMyContext();
  return (
    <div>
      <div
        className="relative w-[600px] h-[600px] m-4 overflow-hidden rounded-lg"
        style={{
          backgroundImage: `url(${eg1.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h3 className="absolute  top-[60px] left-[20px] text-white text-[2.25rem] w-[40%] flex flex-wrap font-bold">
          {banners[0].title}
        </h3>
        <p className="absolute  top-[200px] left-[20px] text-white  w-[40%] flex flex-wrap ">{banners[0].description}</p>
        <p className="bg-white text-blue-400 absolute bottom-[80px] left-[20px] rounded-xl px-5 py-2 " >{banners[0].button}</p>
        {/* <div 
        className="absolute top-[200px] left-[20px] bg-slate-700 rounded-full " 
        style={{
          backgroundImage: `url(${eg4.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        ></div> */}
     <Image 
 src={banners[0].imageUrl? banners[0].imageUrl : cake2}
  width={300} 
  height={300} 
  alt="your image" 
  className="rounded-full absolute right-2 top-[10rem] object-cover"
/>

      </div>
    </div>
  );
};

export default Tempone;
