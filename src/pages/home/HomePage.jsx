import React from 'react';
import {Header, Navbar, Sidebar, Task} from '../../container';

const HomePage = () => {
  return (
    <div className='flex flex-row background__color dark:bg-[--color-darkbg] min-h-screen '>
    <div className="flex-2">
    <Sidebar />
    </div>
    <div className="flex-1 m-5">
    <Navbar />
    <Header />
    <Task />
    </div>
  </div>
  )
}

export default HomePage
