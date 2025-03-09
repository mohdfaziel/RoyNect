import React from 'react'

function TextCard({title,desc,points}) {
  return (
    <div className='w-full flex flex-col justify-start gap-2 md:gap-4'>
      <h1 className='font-bold text-2xl md:text-3xl'>{title}</h1>
      <div className='text-base text-justify md:text-xl font-normal text-gray-500'>
        <p>{desc}</p>
        {points.length != 0 && <ul className="list-disc pl-[20px] mt-2">
            {
                points.map((point,index)=> <li key={index}>{point}</li>)
            }
        </ul>}
      </div>
    </div>
  )
}

export default TextCard
