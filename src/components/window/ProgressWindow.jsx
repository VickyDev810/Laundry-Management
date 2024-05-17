import React from 'react'

const ProgressWindow = ({title, percentage}) => {
  return (
    <div className='cursor-pointer mr-2 sm:mb-5 sm:mr-0'>
      <div className='p-5 gradient__bg rounded-lg h-full flex flex-col justify-between min-w-40 shadow-lg'>
        <div className='flex flex-row justify-center'>
        <div className=' rounded-full bg-[var(--color-bg)] p-3 w-16 h-16'> 
        <h1 className='text-center text-[1.5rem] font-poppins font-medium'>{percentage}</h1>
        </div>
        </div>
        <p className='text-center text-slate-600 font-poppins text-lg'>{title}</p>
      </div>
    </div>
  )
}

export default ProgressWindow
