import React from 'react'

function Gridlayout({content1, content2}) {
  return (
    <div className='grid grid-cols-2 my-12  space-x-4 container w-full max-w-[90%] mx-auto'>
        <div>{content1}</div>
        <div>{content2}</div>
    </div>
  )
}

export default Gridlayout