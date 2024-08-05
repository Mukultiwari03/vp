"use client";
import React from "react";
import Image from "next/image";
import eg2 from "../../app/assets/banners/eg2.png";
import cake2 from "../../app/assets/cake2.jpeg";
import { useMyContext } from "../../context/Mycontext";
const Temptwo = () => {
  const { bannerDetails, setBannerDetails, banners, setBanners} = useMyContext();  
  return (
    <div>
      <div
        className="relative w-[600px] h-[600px] m-4 overflow-hidden rounded-lg"
        style={{
          backgroundImage: `url(${eg2.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h3 className="absolute  top-[60px] left-[20px]  text-[2.25rem] w-[40%] flex flex-wrap font-bold">
          {banners[1].title}
        </h3>
        <p className="absolute  top-[190px] left-[20px]  w-[40%] flex flex-wrap ">{banners[1].description}</p>
        <p className="text-white bg-red-800 absolute bottom-[80px] left-[20px] rounded-xl px-5 py-2 " >{banners[1].button}</p>
        {/* <div 
        className="absolute top-[200px] left-[20px] bg-slate-700 rounded-full " 
        style={{
          backgroundImage: `url(${eg4.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        ></div> */}
        <Image src={banners[1].imageUrl? banners[1].imageUrl : cake2} width={350} height={350} alt="your image" className="rounded-full absolute  bottom-[-4px] right-[-55px]"></Image>

       
      </div>
    </div>
  );
};

export default Temptwo;
