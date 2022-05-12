import React from 'react'

function Header({header}) {
  return (
    <div className='flex flex-col items-center justify-center mb-6'>
        <span className='font-DW text-[52px] font-[700] leading-[103px] text-white'>{header}</span>
    </div>
  )
}

export default Header