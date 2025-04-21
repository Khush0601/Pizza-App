import React from 'react'

const Card = ({image,title,desc}) => {
  return (
    <div className="w-full max-w-[250px] bg-white border  flex flex-col  h-[420px]">
      <img src={image} alt={title} className="h-[150px] w-full object-cover rounded-t" />
      <div className="flex-1 px-3 py-2">
        <h2 className="font-semibold text-lg mb-2">{title}</h2>
        <p className="text-sm text-gray-700">{desc}</p>
      </div>
      <button className="bg-green-600 text-white p-2.5 w-full rounded-b hover:bg-green-700 transition">
        View more
      </button>
    </div>
  )
}

export default Card