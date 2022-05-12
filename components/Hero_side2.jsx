import React from "react";

function Hero_side2() {
  return (
    <div className="w-full justify-end space-x-4 flex">
      <div className="flex space-y-4 flex-col">
        <img className="col-span-1 row-span-1 hover:scale-125 duration-100" src="/imgs/hero/hero1.png" />
        <img className="col-span-1 row-span-1" src="/imgs/hero/hero3.png" />
        <img className='col-span-1 row-span-1' src='/imgs/hero/hero4.png'/>
      </div>
      <div className="flex space-y-4 flex-col">
        <img className="col-span-1 row-span-1" src="/imgs/hero/hero2.png" />
        <img className="col-span-1 row-span-1" src="/imgs/hero/hero5.png" />
        <img className='col-span-1 row-span-1' src='/imgs/hero/hero6.png'/>
      </div>
      <div className="flex flex-col items-center justify-center">
      <img className='col-span-1 row-span-1' src='/imgs/hero/hero7.png'/>
      </div>
    </div>
  );
}

export default Hero_side2;
