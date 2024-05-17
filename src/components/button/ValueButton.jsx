import React from 'react'

const ValueButton = ({content}) => {
  return (
    <div className='laundary__custom_value_btn bg-[var(--color-bg)] rounded-lg border-solid border border-black shadow-lg hover:animate-pulse hover:bg-gray-600' >
      <button type='button' className='cursor-pointer p-2 font-poppins text-[16px font-medium '>{content}</button>
    </div>
  )
}

export default ValueButton
