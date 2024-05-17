import './App.css'

import React from 'react'
import {Header, Navbar, Sidebar, Status, Task} from './container';


const App = () => {
  return (
    <div className='flex flex-row background__color'>
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

export default App
