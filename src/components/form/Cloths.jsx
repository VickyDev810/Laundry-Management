import React, {useState} from 'react'

const Cloths = ({content}) => {
  const [count, setCount] = useState(0);

  return (
    <div className='flex flex-row items-center justify-center'>
       <h1 className='font-poppins mr-5'>{content}</h1>
       <button 
          type='button' 
          className='border-black border-[1px] border-solid m-2 bg-white rounded-full px-2 shadow-lg'
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <p>{count}</p>
        <button 
          type='button' 
          className='border-black border-[1px] border-solid m-2 bg-white rounded-full px-2 shadow-lg'
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
    </div>
  )
}

export default Cloths
