import React from 'react'

function Block({content,title,logo}) {
  return (
    <div className='w-[45%] md:w-full py-4 rounded-3xl flex bg-Aunactive flex-col gap-1 justify-center items-center'>
      <h1 className=' text-xl md:text-2xl text-white font-semibold'>{content}</h1>
      <div className='flex justify-center items-center gap-1'>
        <div className='w-4 md:w-5'>
            <img className='w-full h-full' src={logo}></img>
        </div>
        <p className='text-gray-700 text-xs md:text-sm font-medium'>{title}</p>
      </div>
    </div>
  )
}

export default Block