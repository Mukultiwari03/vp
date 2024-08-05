"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';


import Link from 'next/link';


const Header = () => {


 
  return (
    <div className='sticky top-0 z-10 bg-white py-3 backdrop-filter backdrop-blur-lg bg-opacity-75 z-30'>
      <div className='flex flex-row justify-between w-[80%] mx-auto p-2  items-center border-b-[1px] border-white/55 '>
        <div>
          <div className="logo">
          <p>:LoGo</p>
          </div>
        </div>
        <div>
          {/* <ul className='flex gap-5 justify-center items-center list-none'>
            <li>
              <Link href ="/">
                HOME
              </Link>
            </li>
            <li>
            <Link href ="/teams">
                TEAMS
              </Link>
            </li>
            <li>
            <Link href ="/community">
                COMMUNITY
              </Link>
            </li>
            <li>
            <Link href ="/gallery">
                GALLERY
              </Link>
            </li>
            <li>
            <Link href ="/about">
                ABOUT
              </Link>
            </li>
          </ul> */}
        </div>

        <div className='w-[50px] h-[50px] rounded-full text-center flex items-center justify-center bg-blue-200'>User</div>
       

      </div>
    </div>
  )
}

export default Header;
