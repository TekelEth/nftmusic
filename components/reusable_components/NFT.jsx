import React from 'react'
import Image from 'next/image';

function NFT() {
  return (
    <div className='border-[1.5px] w-[368px] h-[443.55px]  relative border-white border-r-0 border-t-0'>
        <div className='flex flex-col items-center'>
            <Image 
             src="/imgs/latest_drops/nft1.png"
             width="350px"
             height = "30%"
            />
        </div>
        <div className= "py-2  pr-2 flex flex-col bg-red-400">
            <span className='uppercase mb-2 font-[700] text-white '>Flyin Jet</span>
            <div className='flex justify-between mb-2 items-center'>
                <span>313.294</span>
                <span>16 Tokens</span>
            </div>
            <div className='w-[90%] flex justify-between'>
                <button>Play now</button>
                <button>Buy Nft</button>
            </div>
        </div>
    </div>
  )
}

export default NFT