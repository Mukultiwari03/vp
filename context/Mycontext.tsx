"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface Banner {
  id: number;
  title: string;
  description: string;
  button: string;
  imageUrl: string;
}

interface BannerDetails {
  id: number;
  title: string;
  description: string;
  imageUrl: string | null;
  button: string;
}

type MyContextType = {
  value: string;
  setValue: (value: string) => void;
  bannerDetails: BannerDetails | null;
  setBannerDetails: (details: BannerDetails | null) => void;
  banners: Banner[];
  setBanners: (banners: Banner[]) => void;
};

const MyContext = createContext<MyContextType | undefined>(undefined);

export const MyContextProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState<string>("Hello, Context!");
  const [bannerDetails, setBannerDetails] = useState<BannerDetails | null>(null); // Initialize with null
  const [banners, setBanners] = useState<Banner[]>([
    { id: 0, title: 'Irresistable cake creations', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, earum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, doloribus.', button: 'Explore Now', imageUrl: "" },
    { id: 1, title: 'Irresistable cake creations', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, earum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, doloribus.', button: 'Explore Now', imageUrl: "" },
    { id: 2, title: 'Irresistable cake creations', description: 'Perfect for every Occasion', button: 'Explore Now', imageUrl: "" },
    { id: 3, title: 'Irresistable cake creations', description: 'Perfect for every Occasion', button: 'Explore Now', imageUrl: "" },
  ]);

  return (
    <MyContext.Provider
      value={{ 
        value, 
        setValue, 
        bannerDetails, 
        setBannerDetails, 
        banners, 
        setBanners 
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (context === undefined) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};
