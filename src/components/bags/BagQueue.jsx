import React from 'react'
import { ValueButton } from '../'

const BagQueue = ({BagId}) => {
  return (
    <div>
      <div className='flex flex-row text-center align-middle p-2'>
        <ValueButton content='view' /> 
        <p className="ml-5 py-2 text-center align-middle font-poppins font-medium ">Bag ID - {BagId}</p>
      </div>
    </div>
  )
}

export default BagQueue
