"use client";
import React, { useEffect } from "react";
import { useMyContext } from "../context/Mycontext";
import Tempone from "./templates/Tempone";
import Temptwo from "./templates/Temptwo";
import Tempthree from "./templates/Tempthree";
import Tempfour from "./templates/Tempfour";
const Form = ({ idd }: { idd: any }) => {
  const bann = [Tempone, Temptwo, Tempthree, Tempfour];

  const { bannerDetails, setBannerDetails, banners, setBanners } =
    useMyContext();
  type BannerDetails = typeof bannerDetails;
  useEffect(() => {}, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBannerDetails({
      ...bannerDetails,
      [name]: name === "id" ? parseInt(value, 10) || 0 : value,
    } as BannerDetails);
  };

  const doneHandler = () => {
    const newBanners = banners.map((banner) => {
      if (banner.id === idd) {
        return {
          ...banner,
          title: bannerDetails?.title ?? "",
          description: bannerDetails?.description ?? "",
          imageUrl: bannerDetails?.imageUrl ?? "",
          button: bannerDetails?.button ?? "",
        };
      }
      return banner;
    });
    setBanners(newBanners);
  };

  console.log(bannerDetails);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <form className="bg-white p-6 rounded-md shadow-md w-[500px]">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-base font-semibold text-gray-900">
              Edit Banner
            </h2>
            <button className="text-gray-500 hover:text-gray-700">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          <div className="relative w-full h-60 bg-gray-200 rounded-md overflow-hidden">
            {/* <img alt="Image Preview" className="object-cover w-full h-full" /> */}
            {bann.map((BannerComponent, index) => {
              if (index === idd) {
                return (
                  <div
                    key={index}
                    className="relative w-[600px] h-[600px] m-4 overflow-hidden rounded-lg"
                    style={{
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 flex justify-center items-center z-0">
                      <BannerComponent />
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Image Attribution:{" "}
              <a href="#" className="text-blue-500">
                Photo by Star of the Sea on Unsplash
              </a>
            </p>
          </div>

          <div>
            <div className="col-span-full">
              <label
                htmlFor="imageUrl"
                className="block text-sm font-medium text-gray-700"
              >
                Enter Image Url
              </label>
              <input
                type="text"
                name="imageUrl"
                id="imageUrl"
                value={bannerDetails?.imageUrl ?? ""}
                onChange={(e) => handleChange(e)}
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-0 focus:border-transparent focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="col-span-full">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={bannerDetails?.title}
                onChange={(e) => handleChange(e)}
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-0 focus:border-transparent focus:outline-none"
              />
            </div>

            <div className="col-span-full">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <input
                type="text"
                name="description"
                id="description"
                value={bannerDetails?.description}
                onChange={(e) => handleChange(e)}
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-0 focus:border-transparent focus:outline-none"
              />
            </div>

            <div className="col-span-full">
              <label
                htmlFor="button-text"
                className="block text-sm font-medium text-gray-700"
              >
                Button Text
              </label>
              <input
                type="text"
                name="button-text"
                id="button-text"
                value={bannerDetails?.button}
                onChange={(e) => handleChange(e)}
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-0 focus:border-transparent focus:outline-none"
              />
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={doneHandler}
              className="text-white bg-blue-400 rounded-xl px-5 py-2 hover:bg-blue-500"
            >
              Done
            </button>
            <button
              type="button"
              className="text-white bg-blue-400 rounded-xl px-5 py-2 hover:bg-blue-500"
            >
              Download
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
