import React from 'react'
import Cloths from './Cloths';

const ClothsForm = ({isOpen}) => {
  if(!isOpen){
    return null;
  }
  return (
    <div className=''>
      <form action="submit" className='flex flex-col justify-center items-center'>
      <Cloths content="hello"/>
      <Cloths content="hello"/>
      <Cloths content="hello"/>
      <Cloths content="hello"/>
      </form>
    </div>
  )
}

export default ClothsForm
