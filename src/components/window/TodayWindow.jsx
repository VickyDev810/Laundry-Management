import React from 'react'
import People from '../../assets/people.png';

const TodayWindow = ({title,text,subtext}) => {
  return (
    <div className='gradient__bg rounded-lg mr-5 shadow-lg cursor-pointer sm:mr-3 dark:bg-[--color-darkbg2] '>
      <div className="py-8 px-10 sm:px-3 sm:py-5 ">
      <h3 className=' font-poppins text-lg font-bold leading-5 sm:text-sm  dark:text-[--text-dark2]'>{title}</h3>
      <p className=' font-poppins text-sm font-light text-slate-600 sm:text-[12px] dark:text-[--text-dark]'>{text}</p>
      <div className='flex flex-row mt-1 justify-between align-middle'>
        <img src={People} alt="" className='w-[59.69px] h-[22px] sm:w-[39.69px] sm:h-[20px]'/>
        <p className='poppins text-sm text-slate-600 sm:text-[12px] dark:text-[--text-dark2]'>{subtext}</p>
      </div>
      </div>
      
    </div>
  )
}

export default TodayWindow
