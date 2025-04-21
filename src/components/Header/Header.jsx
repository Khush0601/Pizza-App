import React from 'react'
import pizzahutLogo from '../../assets/pizza hutlogo.png'
const Header = () => {
  return (
    <div className=' w-4/5 h-12 flex  items-center mx-auto '>
        <img src={pizzahutLogo} alt="pizzaHutLogo" className='w-28 h-28'/>

    </div>
  )
}

export default Header