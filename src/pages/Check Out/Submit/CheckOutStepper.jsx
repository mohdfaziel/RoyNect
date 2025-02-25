import React from 'react'

function CheckOutStepper({steps}) {
  return (
    <div className='w-full relative flex justify-between items-center'>
      {steps.map((step, index) => (
        <div className='flex flex-col gap-2 z-10 justify-center items-center' key={index}>
          <div className='w-10 h-10 rounded-full bg-white flex justify-center items-center'>{index+1}</div>
          <div>{step.name}</div>
        </div>
      ))}
    </div>
  )
}

export default CheckOutStepper
