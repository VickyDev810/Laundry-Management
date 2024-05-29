import React from 'react'
import { CiSearch } from 'react-icons/ci'

const SearchMenu = () => {
  return (
    <div className='border border-black flex flex-row p-1 rounded-lg max-w-[340px] items-center background__color dark:bg-[--color-darkbg2] dark:border-white'>
        <input type="text" placeholder='Search for Bag ID or Customer Name' className='mr-2 outline-none w-full text-black dark:text-[--text-dark2] dark:bg-[--color-darkbg2]'/>
        <CiSearch className='cursor-pointer dark:text-[--text-dark] size-6'/>
    </div>
  )
}

export default SearchMenu
