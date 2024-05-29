import React  from 'react'
import {IoIosNotifications, AiFillMessage, SearchMenu, DarkMode, RiArrowDropDownLine, Link} from './index'

const Navbar = ({ darkMode, setDarkMode }) => {
  
  
  return (
    
    <div className=' flex flex-row align-middle sm:hidden'>
      <div className='flex-1'>
        <SearchMenu />
      </div>
      <div className='flex flex-row mr-7 align-middle items-center'>
        <IoIosNotifications className=' text-gray-500 size-7 mr-2  dark:text-[--text-dark]' />
        <AiFillMessage className=' text-gray-500 size-7 mr-2  dark:text-[--text-dark]'/>
        <Link to={'/'}><div className='mr-2 dark:text-[--text-dark]' >Profile</div></Link>
        <div className='mr-2 dark:text-[--text-dark]'>Bag No</div>
        <RiArrowDropDownLine className='size-7 dark:text-[--text-dark]'/>
        <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>    
  )
}

export default Navbar
