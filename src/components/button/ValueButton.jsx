import React from 'react';
import { useNavigation } from '../../hooks';


const ValueButton = ({ content, path }) => {
  const { navigateTo } = useNavigation();

  return (
    <div className='laundary__custom_value_btn bg-[var(--color-bg)] rounded-lg border-solid border border-black shadow-lg hover:animate-pulse hover:bg-gray-600 dark:hover:bg-slate-600 dark:bg-[--color-darkbg2] dark:border-white '>
      <button 
        type='button' 
        className='cursor-pointer p-1  font-poppins text-[16px] font-medium inline-flex items-center dark:text-[--text-dark2]' 
        onClick={path ? () => navigateTo(path) : () => console.log('calendar')} 
      >
        {content}
      </button>
    </div>
  );
};

export default ValueButton;
