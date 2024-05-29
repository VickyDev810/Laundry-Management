import React from 'react'
import ValueButton from '../button/ValueButton'

const About = () => {
  return (
    <div className='flex flex-row w-full justify-center '>
      <div className='gradient__bg shadow-lg flex flex-row justify-center mt-14 rounded-lg dark:bg-[--color-darkbg2] min-w-full '>
        <div className='flex flex-col p-5 w-full items-center'>
            <h1 className='font-poppins font-bold text-[1.5rem] dark:text-[--text-dark]'>Reach Us</h1>
            <div className='flex flex-row justify-between mt-10 w-full  sm:flex-col  sm:items-center'>
            <div className='flex flex-col min-w-[10rem] md:mt-2 sm:mt-2'>
            <ValueButton content={'Github'}/>
            </div>
            <div className='flex flex-col min-w-[10rem] md:mt-2 sm:mt-2'>
            <ValueButton content={'Gmail'}/>
            </div>
            <div className='flex flex-col min-w-[10rem] md:mt-2 sm:mt-2'>
            <ValueButton content={'Twitter'}/>
    
            </div>
            </div>
            
        </div>
        
        
      </div>
    </div>
  )
}

export default About
