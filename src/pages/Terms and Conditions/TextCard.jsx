import React from 'react'
import { motion } from "framer-motion";
import fadeIn from "../../Framer/Fadein.js";
function TextCard({title,desc,points}) {
  return (
    <motion.div variants={fadeIn("up", 0.3)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.1 }} className='w-full flex flex-col justify-start gap-2 md:gap-4'>
      <h1 className='font-bold text-2xl md:text-3xl'>{title}</h1>
      <div className='text-base text-justify md:text-xl font-normal text-gray-500'>
        <p>{desc}</p>
        {points.length != 0 && <ul className="list-disc pl-[20px] mt-2">
            {
                points.map((point,index)=> <li key={index}>{point}</li>)
            }
        </ul>}
      </div>
    </motion.div>
  )
}

export default TextCard
