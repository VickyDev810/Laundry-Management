import React from 'react'
import { ValueButton,BagQueue,BagReady } from '../../components';
import { BagProgress } from '../';

const Task = () => {
  return (
    <div>
        <h1 className='font-poppins text-[20px] font-bold mt-5'>Bags Overview</h1>
      <div className='big-container flex flex-row w-full sm:flex-col md:flex-col'>
          <div className="gradient__bg rounded-lg w-full mr-3 sm:mb-5 md:mb-5 sm:mr-0 md:mr-0 dark:bg-[--color-darkbg2]">
            <BagQueue BagId="3386"/>
            <BagQueue BagId="3326"/>
            <BagQueue BagId="3346"/>
          </div>
          <div className="rightside w-full flex flex-row justify-center">
            <BagProgress />
          </div>
      </div>
    </div>
  )
}

export default Task
