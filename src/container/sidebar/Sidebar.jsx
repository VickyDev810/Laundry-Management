import React from 'react'
import {ValueButton} from '../../components';
import {RiMenuLine, CiSearch, MdGroups, FaCalendarDay} from './index'

const Sidebar = () => {
  return (
    <div className="mr-20 sm:mr-14 md:mr-14">
    <div className='flex justify-start flex-col gradient__bg h-screen fixed '>
      <div className="p-6 h-screen sm:p-3 md:p-3">
      <div className="flex flex-col items-center w-full h-40 justify-between mt-12">
        <a href='#search'><ValueButton content={<CiSearch />} /></a>
        <div><RiMenuLine /></div>
        <div><MdGroups /></div>
        <div><FaCalendarDay /></div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Sidebar
