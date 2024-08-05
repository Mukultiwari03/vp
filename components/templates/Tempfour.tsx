"use client";
import React from "react";
import Image from "next/image";
import eg4 from "../../app/assets/banners/eg4.png";
import kajukatli from "../../app/assets/kajukatli.jpeg"
import { useMyContext } from "../../context/Mycontext";
const Tempfour = () => {
  const { bannerDetails, setBannerDetails, banners, setBanners} = useMyContext();
  return (
    <div>
      <div
        className="relative w-[600px] h-[600px] m-4 overflow-hidden rounded-lg"
        style={{
          backgroundImage: `url(${eg4.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h3 className="absolute  top-[60px] left-[145px] text-white text-[2.25rem] w-[50%] text-center flex flex-wrap font-bold">
        {banners[3].title}
        </h3>
        <p className="absolute  top-[190px] left-[170px] text-white  w-[40%] flex flex-wrap items-center justify-center"> {banners[3].description}</p>
        <p className="bg-[#eb625b] text-white absolute bottom-[11px] left-[222px] rounded-xl px-5 py-2 " >{banners[3].button}</p>
        {/* <div 
        className="absolute top-[200px] left-[20px] bg-slate-700 rounded-full " 
        style={{
          backgroundImage: `url(${eg4.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        ></div> */}
     <Image 
   src={banners[3].imageUrl? banners[3].imageUrl : kajukatli}
  width={360} 
  height={180} 
  alt="your image" 
  className=" absolute bottom-[97px] left-[116px] object-cover"
/>

      </div>
    </div>
  );
};

export default Tempfour;
