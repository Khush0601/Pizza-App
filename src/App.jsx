import React, { useState } from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Info from './components/info/Info'

const App = () => {
   const [activeTab,setActiveTab]=useState('pizzas')
  return (
   <div className='w-[1200px] mx-auto p-5'>
     <Header/>
     <Nav activeTab={activeTab} setActiveTab={setActiveTab}/>
     <Info activeTab={activeTab}/>
     
   </div>
  )
}

export default App
