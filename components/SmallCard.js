import React from 'react'
import Image from 'next/image'
function SmallCard({img, location,distance}) {
  return (
    <div class="flex items-center m-2 mt-5 space-x-4 
                 rounded-xl cursor-pointer
                 hover:bg-gray-100 
                 hover:scale-105 transition 
                 transform duration-200
                 ease-out ">
        {/** left */}
        <div className='relative h-16 w-16'>
            <Image className='rounded-lg' src={img}  alt="" layout="fill"/>
        </div> 

        {/**Right */}
           <div>
              <h2> {location}</h2>
              <h3> {distance}</h3>
           </div>
    </div>
  )
}

export default SmallCard