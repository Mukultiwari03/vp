"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import heroban from "../assets/heroban.jpg";
import Designpro from "../assets/Designpro.png";
import craft from "../assets/craft.png";
import effortless from "../assets/effortless.png";
import trusted from "../assets/trusted.png";
import eg1 from "../assets/banners/eg1.png";
import eg2 from "../assets/banners/eg2.png";
import eg3 from "../assets/banners/eg3.png";
import eg4 from "../assets/banners/eg4.png";
import { FaEdit } from "react-icons/fa";
import Form from "../../components/Form";
import Tempone from "../../components/templates/Tempone";
import Temptwo from "../../components/templates/Temptwo";
import Tempthree from "../../components/templates/Tempthree";
import Tempfour from "../../components/templates/Tempfour";
import AOS from "aos";
import "aos/dist/aos.css";
const home = () => {
  // const banners =[eg1,eg2,eg3,eg4];

  // interface idDetails {
  //   id: number;
  // }

  const banners = [Tempone, Temptwo, Tempthree, Tempfour];
  const [id, setId] = useState<number>(0);
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);

  useEffect(() => {
    AOS.init();
  }, []);

    const handleBannerClick = (id: number) => {
    setId(id);
    setIsFormVisible(true);
  };

  return (
    <>
      {/* hero section */}
      <section>
        <div className="bg-slate-300 bg-opacity-15 h-[45rem] overflow-hidden">
          <div className="flex flex-col items-center justify-evenly w-[80%] mx-auto ">
            <h5
              className="uppercase font-semibold text-gray-500 mt-12"
              data-aos="fade-in"
              data-aos-duration="700"
              data-aos-delay="200"
              data-aos-once="true"
              data-aos-easing="ease-in-out"
            >
              Create Stunning Banners
            </h5>
            <h1
              className="font-extrabold text-[40px] text-center text-wrap text-gray-700 w-[50%] mt-2"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="100"
              data-aos-once="true"
            >
              Only 2% of banners grab attention. Be in the top 2%
            </h1>
            <p
              className="mt-5 w-[50%] text-center text-lg"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="100"
              data-aos-once="true"
            >
              Use professional field-tested banner templates that follow the
              exact design rules experts look for. Easy to use and done within
              minutes - try now for free!
            </p>
            <button
              className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-10"
              type="button"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="300"
              data-aos-once="true"
            >
              Create Your Banner!
            </button>
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="300"
              data-aos-once="true"
            >
              <Image
                src={heroban}
                alt=""
                width={800}
                height={200}
                className="border-r-4 overflow-clip mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* blue div  */}
      <section className="bg-white w-full  flex items-center justify-center">
        <div
          className="flex flex-row w-[75%] bg-[#92cdfc] bg-opacity-30 mx-auto items-center my-[7rem] justify-around p-[8rem]"
          data-aos="fade-in"
          data-aos-duration="900"
        >
          <div className="flex flex-col items-center justify-center ">
            <h2
              className="font-extrabold text-[40px] text-center text-wrap text-gray-700  mt-2"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="200"
              data-aos-easing="ease-in-out"
            >
              So Much More Than a Banner Maker
            </h2>
            <p
              className="mt-5  text-center text-lg"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="200"
              data-aos-easing="ease-in-out"
            >
              Creating a banner is just the start. With our tool, you don’t just
              choose a template – you bring it to life. Enter your content into
              our easy-to-use form, and watch it transform instantly on your
              selected template. It’s all about making your vision come to life
              effortlessly. Start now and see your ideas take shape!
            </p>
            <h2
              className="font-bold text-[30px]  text-gray-700  mt-10"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="300"
              data-aos-easing="ease-in-out"
            >
              What you will get...
            </h2>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li
                className="text-lg text-gray-600"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="400"
                data-aos-easing="ease-in-out"
              >
                <span className="font-semibold text-gray-800">
                  Easy-to-Use Form:
                </span>{" "}
                Quickly enter your content into our user-friendly form and watch
                it appear on your chosen template in seconds.
              </li>
              <li
                className="text-lg text-gray-600"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="400"
                data-aos-easing="ease-in-out"
              >
                <span className="font-semibold text-gray-800">
                  Customizable Templates:
                </span>{" "}
                Access a wide range of professionally designed templates that
                you can easily personalize with your content.
              </li>
              <li
                className="text-lg text-gray-600"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="400"
                data-aos-easing="ease-in-out"
              >
                <span className="font-semibold text-gray-800">
                  Instant Preview:
                </span>{" "}
                See real-time updates and adjustments as you input your text,
                ensuring your banner looks perfect before finalizing.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Design banner like a pro */}
      <section className="bg-slate-300 bg-opacity-15  w-full pb-20">
        <div className="flex flex-row w-[75%] mx-auto items-center justify-around">
          <div
            className="w-1/2 "
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-delay="200"
            data-aos-easing="ease-in-out"
          >
            {" "}
            <Image src={Designpro} alt="" width={600} height={600} />
          </div>
          <div
            className="w-1/2 flex flex-col items-center"
            data-aos="fade-left"
            data-aos-duration="700"
            data-aos-delay="200"
            data-aos-easing="ease-in-out"
          >
            <h2 className="font-extrabold text-[40px] text-wrap text-gray-700 w-[70%] mt-2">
              Design Stunning Banners Like a Pro
            </h2>
            <p className="mt-5 w-[70%]  text-lg">
              Creating impactful banners can feel overwhelming. We're here to
              simplify it. Gain a competitive edge with the best online banner
              maker: crafted by designers, refined by feedback, and trusted by
              thousands of businesses.
            </p>
          </div>
        </div>
        {/* div for three diff content */}
        <div className="flex flex-row items-center justify-center">
          <div className="grid grid-cols-3 gap-10 w-[80%]">
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="200"
              data-aos-easing="ease-in-out"
            >
              <Image src={craft} alt="" width={100} height={100} />
              <div>
                <h2 className="font-bold text-xl  text-wrap text-gray-700 w-[80%] mt-2">
                  Craft Banners That Capture Attention
                </h2>
                <p className="mt-5 text-lg">
                  Utilize our advanced banner maker to create visually striking
                  designs that grab the attention of your audience, whether it’s
                  for social media, websites, or advertising campaigns.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="200"
              data-aos-easing="ease-in-out"
            >
              <Image src={effortless} alt="" width={100} height={100} />
              <div>
                <h2 className="font-bold text-xl  text-wrap text-gray-700 w-[80%] mt-2">
                  Banner Creation Made Effortless
                </h2>
                <p className="mt-5 text-lg">
                  Designing banners has never been easier. With ready-to-use
                  templates, customizable visuals, and intuitive tools - all
                  integrated into our banner maker. Just add your details and
                  make your banner shine.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1100"
              data-aos-delay="200"
              data-aos-easing="ease-in-out"
            >
              <Image src={trusted} alt="" width={100} height={100} />
              <div>
                <h2 className="font-bold text-xl  text-wrap text-gray-700 w-[80%] mt-2">
                  Tested and Trusted Design Tool
                </h2>
                <p className="mt-5 text-lg">
                  Our banner maker and its features are tested by design experts
                  and marketing professionals. We ensure your banners stand out
                  and effectively communicate your message.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* actual banner template */}
      <section className="bg-blue-400 py-20">
        <div className="flex flex-col items-center justify-center">
          <h2
            className="font-extrabold text-[40px] text-center text-wrap text-white w-[70%] mt-2"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="200"
            data-aos-easing="ease-in-out"
          >
            Design Stunning Banners Like a Pro
          </h2>
          <p
            className="mt-5 w-[70%] text-center text-white text-lg"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="300"
            data-aos-easing="ease-in-out"
          >
            Creating impactful banners can feel overwhelming. We're here to
            simplify it. Gain a competitive edge with the best online banner
            maker: crafted by designers, refined by feedback, and trusted by
            thousands of businesses.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center mt-10 gap-10">
          {/* {banners.map((banner, index) => (
        <div
          key={index}
          className="relative w-[600px] h-[600px] m-4 overflow-hidden rounded-lg"
          style={{
            backgroundImage: `url(${banner.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          onClick={() => setIsFormVisible(true)}
        >
          <div className="absolute inset-0 bg-black opacity-50 hover:opacity-15"></div>
          <FaEdit size={25} color="black" className="m-5"/>
        </div>
      ))} */}
          {banners.map((BannerComponent, index) => (
            <div
              key={index}
              className="relative w-[600px] h-[600px] m-4 overflow-hidden rounded-lg"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={() => handleBannerClick(index)}
            >
              <div className="absolute inset-0 bg-black opacity-50 hover:opacity-15 z-10"></div>
              <FaEdit
                size={25}
                color="black"
                className="m-5 absolute top-0 left-0 z-20"
              />
              <div className="absolute inset-0 flex justify-center items-center z-0">
                <BannerComponent />
              </div>
            </div>
          ))}

          {isFormVisible && <Form idd={id}/>}
        </div>
      </section>
     
    </>
  );
};

export default home;
