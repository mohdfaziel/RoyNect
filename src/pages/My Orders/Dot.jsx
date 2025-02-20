import React from 'react'

function Dot({active}) {
  return (
    <div className='checkMark flex justify-start items-center z-10 absolute top-3 -left-[5px] w-4 rounded-full h-4 bg-white'>
    <div className={`w-2 h-2 rounded-full ${active ? 'bg-main' : 'bg-gray-300'}`}>
    </div>
    </div>
  )
}

export default Dot
