import React from 'react'
import Image from 'next/image'
function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400] lg:h-[500] xl:h-[600] 2xl:h-[700]'>
       <Image src="https://links.papareact.com/0fm"
        layout='fill' 
        objectFit='cover'
        />
        <div className='absolute top-1/2 w-full text-center'>
            <p className='text-sm sm:text-lg'> Not Sure Where to Go? Perfect</p>
            <button className='
            text-purple-500
            bg-white px-10 
            py-4 shadow-md 
            rounded-full 
            font-bold my-3
            hover:shadow-xl
            active:scale-90
            transition duration-150'> I'm Flexible </button>
        </div>
    </div>
  )
}

export default Banner