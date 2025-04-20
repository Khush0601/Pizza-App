import React from 'react'

const Card = () => {
  return (
    <div className='w-[250px]  bg-gray-100 p-2 m-5 border-2'>
        <img src="https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/kadhai-paneer.86f5d60ae5c4f1e7f41b89be36aa275d.1.jpg?width=251" alt="pizza" className='w-full ' />
        <h1 className='my-4 font-semibold px-1'>kadai Paneer</h1>
        <p className='my-4 px-1'>Take your taste buds on a joyride with juicy marinated paneer, capsicum, and onion, all coated in flavorful Kadhai sauce</p>
        <button className='text-center bg-green-600 text-white w-full py-2.5 rounded'>View More</button>
    </div>
  )
}

export default Card