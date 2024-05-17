import React from 'react'
import { CiSearch } from 'react-icons/ci'

const SearchMenu = () => {
  return (
    <div className='border border-black flex flex-row p-1 rounded-lg w-72 align-middle' >
        <input type="text" placeholder='Search for Bag ID or Customer Name' className='outline-none w-full text-black'/>
        <CiSearch className='cursor-pointer'/>
    </div>
  )
}

export default SearchMenu
