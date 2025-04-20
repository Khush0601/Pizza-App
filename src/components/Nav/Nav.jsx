import React, { useState } from 'react'

const Nav = () => {
    const [activeTab,setActiveTab]=useState('pizzas')
  return (
    <div className='w-full'>
       <div className=' border-2 my-2 flex w-3/5 mx-auto '>
       <div className={`w-1/5 py-2 text-center border-2 border-t-0 border-l-0 border-b-0 ${activeTab==='pizzas' ? 'bg-red-500 text-white font-semibold' : ''}`} onClick={()=>setActiveTab('pizzas')}>Pizzas</div>
        <div className={`w-1/5 py-2 text-center border-2 border-t-0 border-l-0 border-b-0 ${activeTab==='sides' ? 'bg-red-500 text-white font-semibold' : ''}`} onClick={()=>setActiveTab('sides')}>Sides</div>
        <div className={`w-1/5 py-2 text-center border-2 border-t-0 border-l-0 border-b-0 ${activeTab==='desserts' ? 'bg-red-500 text-white font-semibold' : ''}`} onClick={()=>setActiveTab('desserts')}>Desserts</div>
        <div className={`w-1/5 py-2 text-center border-2 border-t-0 border-l-0 border-b-0 ${activeTab==='drinks' ? 'bg-red-500 text-white font-semibold' : ''}`} onClick={()=>setActiveTab('drinks')}>Drinks</div>
        <div className={`w-1/5 py-2 text-center border-2 border-t-0 border-l-0 border-b-0 ${activeTab==='deals' ? 'bg-red-500 text-white font-semibold' : ''}`} onClick={()=>setActiveTab('deals')}>Deals</div>
       </div>
    </div>
  )
}

export default Nav