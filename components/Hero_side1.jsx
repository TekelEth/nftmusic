import React from "react";

const Count = ({num, text}) => (
    <div className="flex flex-col">
        <span className="DR font-[700] leading-[30px] text-[29px] text-center text-white">{num}</span>
        <span className="text-center text-[#ffffff7f] font-[500] text-[19px] font-Poppins" >{text}</span>
    </div>
)

function Hero_side1() {
  return (
    <div className="flex justify-center h-full flex-col w-full">
      <div className="text-white text-[68px]   max-w-[70%] font-bold tracking-tight leading-[80.5px] mb-4 capitalize font-DW">
        Listen to the Difference
      </div>
      <span className="w-[350px] mb-4 h-[64px] font-Poppins font-[400] font-[18px] leading-[27px] text-[#AAA9AA]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet enim,
        tristique
      </span>
      <div className="flex max-w-[60%] justify-between">
        <Count num="37K+" text="songs" />
        <Count num="20K+" text="Artists" />
        <Count num="$99K+" text="Earned by Artist" />
      </div>
      <div className="flex w-[53%] justify-between my-8">
            <button className="text-white bg-[#671AE4] text-[19px] font-500 font-Poppins py-2 rounded-md px-8">View Songs</button>
            <button className="text-white bg-[#ffffff19] text-[19px] font-500 font-Poppins py-2 rounded-md px-8">Sell NFT</button>
      </div>
    </div>
  );
}

export default Hero_side1;
