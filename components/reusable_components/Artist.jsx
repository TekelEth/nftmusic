import React from 'react'
import { artists } from '../../utils/buttons'
import Arrows from './Arrows'
import Button from './Button'
import Header from './Header'
import Image from 'next/image';

const ImageOne = ({url, name, rank }) => (
    <div className='w-[411px] relative h-[437px]   duration-500 rounded-md overflow-hidden'>
        <Image src={url} width="100%" height="100%" layout='fill' className='w-full h-full'/>
        <div className='absolute left-6 text-left  bottom-4 flex items-start justify-start flex-col'>
            <span className='text-left font-Roboto text-white font-[700] text-2xl'>{name}</span>
            <span className='text-left font-Roboto text-[#FF9900] text-[16px] font-[400]'>{rank}</span>
        </div>
    </div>
)


function Artist() {
  return (
    <div className="w-full max-w-[87%] mx-auto pb-28 ">
    <Header header="Artist on Soundmack" />
    <div className="w-[50%] justify-between flex">
    {artists.map((button, i) => (
      <Button text={button.name} isActive={button.active} key={i} />
    ))}
    </div>
    <Arrows />
    <div className='grid grid-cols-3 w-full gap-12 '>         
    <ImageOne url="/imgs/artist/img1.png" name="John Doe" rank="Top 01" />
        <ImageOne url="/imgs/artist/img2.png" name="Jannet Heden" rank="Top 02" />
        <ImageOne url="/imgs/artist/img3.png" name="Maria Macielo" rank="Top 03" />
        <ImageOne url="/imgs/artist/img4.png" name="John Doe" rank="Top 04" />
        <ImageOne url="/imgs/artist/img1.png" name="Preyia Alnord" rank="Top 05" />
        <ImageOne url="/imgs/artist/img2.png" name="John Doe" rank="Top 06" />
    </div>
  </div>
  )
}

export default Artist