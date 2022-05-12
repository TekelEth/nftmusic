import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className="container max-w-[90%] sticky mt-32 mx-auto">
      <div className="w-full flex flex-col">
        <div className="flex items-center mb-4">
          <Image src="/imgs/hero/logo.png" width="132px" height="64px" />
        </div>
        <div className="grid grid-cols-6 ">
          <div className="col-span-3 DR text-[17px] text-gray-100 font-[50] max-w-[60%]">
            NFT gives all the power to creators. Anyone upcoming artiste can do
            their stuff on-chain, making them more independent and freeing them
            from unfavorable deals from record labels.
          </div>
         <div className="col-span-3  items-center grid grid-cols-3 ">
         <div className="col-span-1 font-Poppins ml-12 flex flex-col text-left">
            <span className="font-[500] text-base text-white mb-4">Marketplace</span>
            <span className="mb-6 font-Poppins text-sm text-[#AAA9AA]">Explore</span>
            <span className="mb-6 font-Poppins text-sm text-[#AAA9AA]">All NFTs</span>
            <span className="mb-6 font-Poppins text-sm text-[#AAA9AA]">Collections</span>
            <span className="mb-6 font-Poppins text-sm text-[#AAA9AA]">Sound Work</span>
          </div>
          <div className="col-span-1 font-Poppins ml-12 flex flex-col text-left">
            <span className="font-[500] text-base text-white mb-4">Resources</span>
            <span className="mb-6 font-Poppins text-sm text-[#AAA9AA]">Help Center</span>
            <span className="mb-6 font-Poppins text-sm text-[#AAA9AA]">Sponsors</span>
            <span className="mb-6 font-Poppins text-sm text-[#AAA9AA]">Blog</span>
            <span className="mb-6 font-Poppins text-sm text-[#AAA9AA]">Docs</span>
          </div>
          <div className="col-span-1 font-Poppins mb-9 ml-12 flex flex-col text-left">
            <span className="font-[500] text-base text-white mb-4">Marketplace</span>
            <span className="mb-6 font-Poppins text-sm text-[#AAA9AA]">About Us</span>
            <span className="mb-6 font-Poppins text-sm text-[#AAA9AA]">Career</span>
            <span className="mb-6 font-Poppins text-sm text-[#AAA9AA]">Support</span>
            {/* <span className="mb-6 font-Poppins text-sm text-[#AAA9AA]">Sound Work</span> */}
          </div>
         </div>
        </div>
        <div className="flex mb-12 justify-between w-[12%]">
        <Image src="/imgs/footer/footer3.png" width="32px" height="32px" />
        <Image src="/imgs/footer/footer2.png" width="32px" height="32px" />
        <Image src="/imgs/footer/footer1.png" width="32px" height="32px" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
