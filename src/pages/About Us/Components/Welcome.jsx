import React from 'react'
import { useNavigate } from 'react-router-dom'

function Welcome() {
    const Navigate = useNavigate();
  return (
    <div className='w-full px-[1rem] text-center bg-[url(/bg2.svg)] md:bg-[url(/bg.svg)] bg-cover bg-top h-screen flex flex-col gap-10 justify-center items-center'>
      <div className='flex flex-col gap-2 w-full justify-center items-center'>
      <h1 className='text-4xl md:text-5xl font-extrabold text-white'>Welcome To RoyNect</h1>
      <p className='text-sm font-semibold'>Experience the essence of nature with our 100% pure honey, crafted with care and passion.</p>
      </div>
      <button onClick={()=> Navigate("product")} className='bg-white shadow-md hover:bg-main border-[1px] hover:border-white transition-all hover:scale-105 text-sm md:text-xl font-semibold text-slate-900 px-4 py-2 rounded-full'>Shop Now</button>
    </div>
  )
}

export default Welcome
