import React, { useState } from 'react';
import {Header, Navbar, Sidebar, Task} from '../../container';
import { DarkMode,About } from '../../components';


const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className='flex flex-row background__color dark:bg-[--color-darkbg] min-h-screen '>
    <div className="flex-2">
    <Sidebar darkMode={darkMode} setDarkMode={setDarkMode}  />
    </div>
    <div className="flex-1 m-5">
    <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
    <Header darkMode={darkMode} />
    <Task />
    <About />
    </div>
  </div>
  )
}

export default HomePage
