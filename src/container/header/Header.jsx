import React from 'react'
import Laundry from '../../assets/laundary.jpg'
import dark_laundry from '../../assets/dark_laundry.jpg'
import { Status } from '../'


const Header = () => {

  return (
    <div>
      <div className=' gradient__bg h-1 mt-3 rounded-lg shadow-lg sm:mt-1 dark:bg-[--color-darkbg2]'></div>
      <div className='flex flex-row sm:flex-col'>
        <div className='w-full mt-5 flex flex-col justify-center items-center '>
          <h1 className=' text-[24px] font-black font-poppins sm:text-[18px] dark:text-[--text-dark2]'>Welcome to Laundry Manager</h1>
          <p className='text-[16px] text-slate-600 font-poppins sm:text-[12px] dark:text-[--text-dark]'>Check bag details and status</p>
          <Status  />
        </div>
      <div className='flex flex-row mt-3 w-full justify-center sm:flex-col items-center '>
        <img src={ Laundry } alt="" className="max-h-[380px] rounded-lg shadow-lg sm:max-h-[250px] md:max-h-[300px] "/>
      </div>
    </div>
    </div>
    
  )
}


export default Header
