import React from 'react'
import { Sidebar } from '../../container';
import { BagQueue, SearchMenu, ValueButton } from '../../components';
import Calendar from 'react-calendar';
import { IoMdArrowDropdown } from "react-icons/io";


const SearchPage = () => {
  return (
    <div className='flex flex-row background__color'>
    <div className="flex-2">
    <Sidebar />
    </div>
    <div className="flex-1 m-5">
      <h1 className='font-poppins text-[32px] font-bold '>Search</h1>
      <div className='gradient__bg shadow-lg rounded-lg'>
        <div className='p-5'>
          <div className='flex flex-row justify-start items-center w-full '>
            <SearchMenu   />
            <div className="mr-2"></div>
            <ValueButton content={<><span>Date</span><IoMdArrowDropdown /></>} path={false} />
          </div>
          <h1 className='font-poppins text-[20px] mt-3 font-bold'>Recent Bags</h1>
        <div>
          <BagQueue BagId='2122'/>
          <BagQueue BagId='2122'/>
          <BagQueue BagId='2122'/>
          <BagQueue BagId='2122'/>
        </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SearchPage
