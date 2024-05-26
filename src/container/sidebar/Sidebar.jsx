import React from 'react'
import {ValueButton,DarkMode} from '../../components';
import {RiMenuLine, FaHome, CiSearch, MdGroups, FaCalendarDay} from './'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="mr-20 sm:mr-14 md:mr-14 shadow-lg ">
    <div className='flex justify-start flex-col gradient__bg  fixed dark:bg-[--color-darkbg2]'>
      <div className="p-6 h-screen sm:p-3 md:p-3">
      <div className="flex flex-col items-center w-full h-72 justify-between mt-12">
        <ValueButton content={<CiSearch className='dark:text-[--text-dark] size-6 '/>} path={'/search'}/>
        <div><RiMenuLine className='dark:text-[--text-dark] size-6 '/></div>
        <Link to={'/'}><FaHome className='dark:text-[--text-dark] size-6 '/></Link>
        <Link to={'/user'}><div><MdGroups type='button' className='cursor-pointer dark:text-[--text-dark] size-6 ' /></div></Link>
        <div><FaCalendarDay className='dark:text-[--text-dark] size-6 '/></div>
        <DarkMode />
        
      </div>
      </div>
    </div>
    </div>
  )
}

export default Sidebar
