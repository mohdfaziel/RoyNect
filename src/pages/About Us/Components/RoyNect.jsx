import React from 'react'
import { jars, jarWebp,sp } from '../../../assets/Images/Images'

function RoyNect() {
  return (
    <div className='relative w-full min-h-screen mt-[3rem] md:mt-0 px-[1rem] md:px-[10rem] flex justify-center items-center text-justify'>
    <div className='grid z-10 grid-cols-1 md:grid-cols-2 gap-5 md:gap-16'>
      <div className='left flex flex-col justify-center gap-3'>
        <h1 className='text-4xl md:text-5xl font-extrabold text-white'>RoyNect</h1>
        <div className='text-base md:text-lg font-semibold flex flex-col gap-6'>
            <p>At RoyNect, we are committed to delivering 100% pure, natural honey extracted from <span className='text-white'>Apis cerana</span> honeybees, nurtured in the pristine valleys of <span className='text-white'>Bhadarwah, Jammu and Kashmir</span> also known as Mini Kashmir.</p>
            <p>Every jar of RoyNect honey is a reflection of purity, tradition, and the natural richness of our homeland. We ensure that our honey rewhites untouched by artificial processes, preserving its natural goodness and authenticity.</p>
            <p>Our mission is to bring you the finest honey that not only delights your taste buds but also connects you to the timeless heritage of beekeeping in Jammu and Kashmir. With RoyNect, you do not just taste honey—you experience the essence of nature and tradition.</p>
        </div>
      </div>
      <div className='righ flex bg-[url(/dripHoney.jpg)] bg-cover bg-top justify-center h-full shadow-md bg-white rounded-2xl p-5 items-center'>
        <div className='flex  justify-center items-center w-[25rem]'>
            <img src={jarWebp} className='w-full animate-float h-full'></img>
        </div>
      </div>
      </div>
      <img className='absolute w-[40rem] bottom-[10rem] md:-bottom-[10rem] -left-[10rem]' src={sp}></img>
      <img className='absolute w-[20rem] -top-[9rem] md:-top-[0rem] -right-[10rem]' src={sp}></img>
    </div>
  )
}

export default RoyNect
