import React from 'react'

function Block({content,title,logo}) {
  return (
    <div className='w-full py-4 rounded-3xl flex bg-Aunactive flex-col gap-1 justify-center items-center'>
      <h1 className='text-2xl font-semibold'>{content}</h1>
      <div className='flex justify-center items-center gap-1'>
        <div className='w-5'>
            <img className='w-full h-full' src={logo}></img>
        </div>
        <p className='text-gray-700 text-sm font-medium'>{title}</p>
      </div>
    </div>
  )
}

export default Block