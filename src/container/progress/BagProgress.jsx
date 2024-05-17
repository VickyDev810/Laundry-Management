import React from 'react'
import { ProgressWindow } from '../../components'
import { BsQuestion } from "react-icons/bs";

const BagProgress = () => {
  return (
      <div className='flex flex-row sm:flex-col'>
        <ProgressWindow title='Track your Progress' percentage='82%'/>
        <ProgressWindow title='Bag Status Queries' percentage={<BsQuestion  className='size-[2.5rem]'/>}/>
        <ProgressWindow title='Bag Status FAQ' percentage={<BsQuestion  className='size-[2.5rem] '/>}/>
    </div>
  )
}

export default BagProgress

