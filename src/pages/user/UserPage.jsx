import React, {useState} from 'react'
import { Sidebar } from '../../container'
import { ClothsForm } from '../../components'

const UserPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [clothsform, setClothsForm ] = useState(false);
  return (
    <div className='flex flex-row  dark:bg-[--color-darkbg] min-h-screen '>
      <div className="flex-2">
        <Sidebar darkMode={darkMode} setDarkMode={setDarkMode}/>
      </div>
      <div className="flex-1 m-5">
        <h1 className=" font-poppins font-bold text-[32px] dark:text-[--text-dark2]">Hello User</h1>
          <div className="gradient__bg rounded-lg p-3 m-10 flex flex-col justify-center items-center dark:bg-[--color-darkbg2]" >
          <div className='max-w-[250px]'>
          </div>
          <button type='button' className='background__color rounded-lg p-3 dark:text-[--text-dark2] dark:bg-[--text-dark]'
          onClick={()=>setClothsForm(true)}
          >Submit Clothes</button>
          <ClothsForm isOpen={clothsform} />
        </div>
      </div>
    </div>
  )
}

export default UserPage
