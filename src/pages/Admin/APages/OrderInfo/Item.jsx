import React from 'react'
import { cpy } from '../../../../assets/Images/Images'

function Item({title,value}) {
  return (
    <div className='flex justify-center w-full md:w-fit text-white font-semibold text-sm md:text-lg items-center gap-3 bg-Adark1 px-4 py-2 rounded-full'>
      <div>{title} : </div>
      <div className='flex justify-center items-center text-gray-500 gap-3'>{value} <img onClick={()=> navigator.clipboard.writeText(value)} className='w-4 hover:scale-110 transition-all' src={cpy}></img></div>
    </div>
  )
}

export default Item