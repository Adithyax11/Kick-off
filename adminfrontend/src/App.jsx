import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import Add from './Screens/Add/Add'
import List from './Screens/List/List'
import Orders from './Screens/Order/Order'
import './App.css'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <hr/>
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path='/' element={<Add/>}/>        
          <Route path='/add' element={<Add/>}/>
          <Route path='/list' element={<List/>}/>
          <Route path='/orders' element={<Orders/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App