import {
  attention,
  jar3,
  mainImg2,
  minus,
  plus,
  rupee,
} from "../assets/Images/Images";
import { motion } from "framer-motion";
import fadeIn from "../Framer/Fadein";
import Buy from "./Buy";
import BuyPhone from "./BuyPhone";
import Quantity from "./Quantity";
import { useState } from "react";
export default function Main() {
  const [qty, setQty] = useState("0.5kg");
  const [activeQty, setActiveQty] = useState("0.5");
  const [price, setPrice] = useState("600");
  return (
    <div
      id="product"
      className="w-full max-w-[102rem] md:max-h-[50rem] overflow-x-hidden md:overflow-hidden md:pb-7 md:px-[3rem] h-screen flex flex-col justify-between gap-5 md:justify-start  items-center"
    >
      <div className="upper relative z-10 md:relative h-full md:h-screen flex flex-col md:flex-row md:justify-between justify-center mt-[3rem] md:mt-[8rem] md:items-start items-center w-full">
        <motion.div
          variants={fadeIn("", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="Product md:flex hidden transition-all flex-col justify-center w-96 gap-3 items-start"
        >
          <h1 className="desc text-5xl font-extrabold z-20">
            100% Pure & Natural Honey
          </h1>
          <div className="quantity text-lg">{qty}</div>
        </motion.div>
        <div className="Image animate-float md:animate-none md:absolute w-[20rem] md:w-[50rem] md:-top-[6rem] md:left-1/2 md:transform md:-translate-x-1/2 ">
          <img
            src={mainImg2}
            className="w-[100%] md:block hidden -z-10"
            alt=""
          />
          <img src={jar3} className="w-[100%] md:hidden -z-10" alt="" />
        </div>
        <motion.div
          variants={fadeIn("", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="Quantity z-20 flex flex-col justify-center items-center md:items-end gap-5"
        >
          <div className="flex justify-center items-center gap-3">
            <Quantity
              onClick={() => {
                setQty("0.5kg");
                setActiveQty("0.5");
                setPrice("600");
              }}
              bg={activeQty === "0.5" ? "active" : "Dark3"}
              txt={activeQty === "0.5" ? "white" : "unactive"}
              qty=".5kg"
            />
            <Quantity
              onClick={() => {
                setQty("1kg");
                setActiveQty("1");
                setPrice("1,200");
              }}
              bg={activeQty === "1" ? "active" : "Dark3"}
              txt={activeQty === "1" ? "white" : "unactive"}
              qty="1kg"
            />
            <Quantity
              onClick={() => {
                setQty("2kg");
                setActiveQty("2");
                setPrice("2,400");
              }}
              bg={activeQty === "2" ? "active" : "Dark3"}
              txt={activeQty === "2" ? "white" : "unactive"}
              qty="2kg"
            />
          </div>
          <div className="Attention flex justify-center items-center gap-1">
            <img src={attention} className="w-6" alt="" />
            <p className="text-sm">100% Natural. Always Pure</p>
          </div>
        </motion.div>
        <div className="absolute -z-10 w-[30rem] h-[30rem] md:w-[40rem] md:h-[40rem] rounded-full blur-3xl opacity-40 bg-white md:-top-[6rem] md:left-[55%] md:transform md:-translate-x-1/2"></div>
      </div>
      <div className="lower md:flex hidden z-20 h-fit justify-between items-center w-full">
        <motion.p
          variants={fadeIn("", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="text-xl w-[30rem]"
        >
          Golden, raw, and unfiltered—our honey is harvested directly from our
          hives, preserving its natural goodness. Perfect for your tea, toast,
          or as a wholesome treat, it’s the sweetness you can trustk
        </motion.p>
        <div className="price flex justify-center items-center">
          <h1 className="text-6xl font-extrabold">{price}</h1>
          <img src={rupee} className="w-16" alt="" />
        </div>
        <Buy />
      </div>
      <BuyPhone qty={qty} price={price} />
    </div>
  );
}
