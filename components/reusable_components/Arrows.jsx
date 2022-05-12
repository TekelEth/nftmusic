import React from 'react'
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io';

function Arrows({isActive}) {
  return (
    <div className='w-full my-8 flex items-center justify-end'>
        <div className='flex'>
            <div className={`p-3 rounded-full mr-4 border-2 ${isActive ? "border-white" : "border-gray-400"}`}>
                <IoIosArrowBack className={`w-5 ${isActive ? "text-white" : "text-gray-400"} h-5`} />
            </div>
            <div className={`p-3 rounded-full border-2 ${isActive ? "border-white" : "border-gray-400"}`}>
                <IoIosArrowForward className={`w-5 h-5 ${isActive ? "text-white" : "text-gray-400"}`} />
            </div>
        </div>
    </div>
  )
}

export default Arrows