import React from "react";
import Header from "./reusable_components/Header";

function FAQ() {
  return (
    <div className="w-full max-w-[87%] mx-auto">
      <Header header="HOW SOUNDMACK WORKS" />
      <div className="w-full mb-8 grid grid-cols-3">
        <span className="flex w-[453px] h-[408px]  DR text-white text-[390px] flex-col justify-center items-center col-span-1">
           01
        </span>
        <div className="flex flex-col items-start px-3 justify-center col-span-2">
          <span className="font-[600] text-[41px] mb-4 leading-[41px] text-white DR uppercase">
            LAUNCH A LISTENING PARTY
          </span>
          <span
            className="font-[400] text-[22px] leading-[40px] text-white DR uppercase"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit
          </span>
        </div>
      </div>
      <div className="w-full mb-8 grid grid-cols-3">
        <div className="flex flex-col col-span-2 items-start justify-center">
          <span className="font-[600] text-[41px] mb-4 leading-[41px] text-white DR uppercase">
            OWN THE MOMENT
          </span>
          <span
            n
            className="font-[400] text-[22px] leading-[40px] text-white DR uppercase"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit
          </span>
        </div>
        <span className="flex w-[453px] h-[408px]  DR text-white text-[390px] flex-col justify-center items-center col-span-1">
           02
        </span>
      </div>
      <div className="w-full mb-8 grid grid-cols-3">
      <span className="flex w-[453px] h-[408px]  DR text-white text-[390px] flex-col justify-center items-center col-span-1">
           03
        </span>
        <div className="flex flex-col px-3 items-start justify-center col-span-2">
          <span className="font-[600] text-[41px] mb-4 leading-[41px] text-white DR uppercase">
            CREATE A CULTURE
          </span>
          <span
            className="font-[400] text-[22px]  leading-[40px] text-white DR uppercase"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit
          </span>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
