import React from 'react'
import assets from '../assets/assets'

const Navbar = () => {
  return (
    <div>
      <div className='w-[100%] flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
            <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="" />
            <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="" />
        </div>
        <div className='flex items-center gap-4'>
            <p className='bg-white text-black text-[15px] px-4'></p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
