import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="max-w-[88%] mx-auto py-6 gap-x-8 grid grid-cols-5   px-2 stick top-0">
      <div className="col-span-1 flex  items-center">
        <Image src="/imgs/hero/logo.png" width="140px" height="74px" />
      </div>
      <div className="col-span-2 flex items-center justify-center">
        <div className="w-[90%] flex items-center mx-auto relative">
          <div className="flex items-center justify-center flex-col absolute top-[0.78rem] left-4">
            <svg
              fill="none"
              stroke="currentColor"
              strokelinecap="round"
              strokelinejoin="round"
              strokewidth="2"
              viewBox="0 0 24 24"
              className="w-5 h-5 text-[#ffffff7f]"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input className="w-full bg-[#ffffff19] shadow-lg outline-none px-12 rounded-md  text-[15px] leading-[30px] py-2 font-Poppins font-[500] mix-blend-normal pl-12 text-[#ffffff7f]" placeholder="Search items and collections" />
        </div>
      </div>
      <div className="col-span-2 flex items-center max-w-[100%] justify-end">
        <span className="navItem">Trending</span>
        <span className="navItem">Open Sea</span>
        <span className="navItem">FAQ</span>
        <button className="text-[#1C2041] bg-white text-[15px] font-500 font-Poppins py-2 rounded-md px-8">Connect Wallet</button>
      </div>
    </nav>
  );
}

export default Navbar;
