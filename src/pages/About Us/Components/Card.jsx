import React from "react";
import { motion } from "framer-motion";
import fadeIn from "../../../Framer/Fadein.js";
function Card({ logo, title, desc, className ,fade}) {
  return (
    <motion.div
      variants={fadeIn(fade, 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      style={{
        rotate: className.includes("-rotate-")
          ? -parseFloat(className.match(/-rotate-(\d+)/)?.[1]) || 0
          : parseFloat(className.match(/rotate-(\d+)/)?.[1]) || 0,
      }}
      className={`absolute p-3 hidden md:flex flex-col w-[15rem] justify-center items-center gap-2 rounded-2xl shadow-md bg-white ${className}`}
    >
      <div className="heading w-full flex flex-col justify-center gap-1 items-center">
        <div className="logo bg-radial-gradient w-10 h-10 rounded-full p-2">
          <img src={logo} className="w-full h-full"></img>
        </div>
        <h1 className="text-lg font-bold leading-5">{title}</h1>
      </div>
      <p className="text-base font-semibold leading-5 text-gray-600">{desc}</p>
    </motion.div>
  );
}

export default Card;
