import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Info from './components/info/Info'
import Card from './components/card/Card'

const App = () => {
  return (
   <div className='w-[1200px] mx-auto p-5'>
     <Header/>
     <Nav/>
     <Info/>
     <Card/>
   </div>
  )
}

export default App
