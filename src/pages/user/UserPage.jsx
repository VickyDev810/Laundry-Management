import React from 'react'
import { Sidebar } from '../../container'
import { TodayWindow } from '../../components'

const UserPage = () => {
  return (
    <div className='flex flex-row '>
      <div className="flex-2">
        <Sidebar />
      </div>
      <div className="flex-1 m-5">
        <h1 className=" font-poppins font-bold text-[32px]">Hello User</h1>
          <div className="gradient__bg rounded-lg p-3 m-10 flex flex-col justify-center items-center" >
          <div className='max-w-[250px]'>
          <TodayWindow title="Check Status" text="Laundry" subtext="Ready"/>
          </div>
          <button type='button' className='background__color rounded-lg p-3'>Submit Clothes</button>
        </div>
      </div>
    </div>
  )
}

export default UserPage
