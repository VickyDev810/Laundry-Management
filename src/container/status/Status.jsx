import React from 'react'
import { ValueButton, TodayWindow } from '../../components'

const Status = () => {
  return (
    <div className='mt-5 flex flex-row sm:flex-col md:flex-col'>
      <div className='flex flex-col w-full'>
        <div className='flex justify-center align-middle'>
        <ValueButton content="Update Status" className=""/>
        </div>
      <div className='flex flex-row mt-5 w-full'>
        <TodayWindow title="Check Upcoming" text="Today's tasks" subtext="Manage" />
        <TodayWindow title="Upcoming laundary" text="Today's laundary tasks" subtext="Laundary"/>
      </div>
      </div>
    </div>
  )
}

export default Status
