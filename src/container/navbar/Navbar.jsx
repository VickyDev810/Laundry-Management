import React from 'react'
import {IoIosNotifications, AiFillMessage, SearchMenu} from './index'
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className=' flex flex-row align-middle sm:hidden'>
      <div className='flex-1'>
        <SearchMenu />
      </div>
      <div className='flex flex-row mr-7 align-middle'>
        <IoIosNotifications className=' text-gray-500 size-7 mr-2' />
        <AiFillMessage className=' text-gray-500 size-7 mr-2'/>
        <div className='mr-2'>Profile</div>
        <div className='mr-2'>Bag No</div>
        <RiArrowDropDownLine className='size-7'/>
      </div>
    </div>    
  )
}

export default Navbar
