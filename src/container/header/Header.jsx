import React from 'react'
import Laundary from '../../assets/laundary.jpg'
import { Status } from '../'

const Header = () => {
  return (
    <div>
      <div className=' gradient__bg h-1 mt-3 rounded-lg shadow-lg sm:mt-1'></div>
      <div className='flex flex-row sm:flex-col'>
        <div className='w-full mt-5 flex flex-col justify-center items-center '>
          <h1 className=' text-[24px] font-black font-poppins sm:text-[18px] '>Welcome to Laundry Manager</h1>
          <p className='text-[16px] text-slate-600 font-poppins sm:text-[12px]'>Check bag details and status</p>
          <Status />
        </div>
      <div className='flex flex-row mt-3 w-full justify-center sm:flex-col items-center '>
        <img src={Laundary} alt="" className='max-h-[380px] rounded-lg shadow-lg sm:max-h-[250px] md:max-h-[300px] '/>
      </div>
    </div>
    </div>
    
  )
}


export default Header
